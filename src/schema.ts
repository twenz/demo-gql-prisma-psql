import { arg, intArg, list, makeSchema, nonNull, nullable, objectType, stringArg } from "nexus";
import { Context } from "./context";

const Query = objectType({
    name: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('allUser', {
            type: 'User',
            args: {
                id: nullable(list(nullable(intArg()))),
                email: nullable(stringArg())
            },
            resolve: (_parent, args, context: Context) => {
                // debugger
                return context.prisma.user.findMany({
                    // where: {
                    //     id: { in: args.id},
                    //     email: args.email
                    // },
                    include: {
                        Profile: true
                    }
                })
            }
        })
        t.nullable.int('allUserCount', {
            resolve: (_parent, _args, context: Context) => context.prisma.user.count()
        })
        // t.list.field('countUser', {
        //     type: 'User',
        //     resolve: (_parent, _args, context: Context) => {
        //         return context.prisma.user.count()
        //     }
        // })
    }
})

const Mutation = objectType({
    name: 'Mutation',
    definition(t) {
        t.nonNull.field('addUser', {
            type: 'User',
            args: {
                email: nonNull(stringArg())
            },
            resolve: (_, args, context: Context) => {
                return context.prisma.user.create({
                    data: {
                        email: args.email
                    },
                })
            }
        })
        t.nonNull.field('addProfile', {
            type: 'Profile',
            args: {
                name: nonNull(stringArg()),
                lastame: nullable(stringArg()),
                age: nullable(intArg()),
                userId: nonNull(intArg())
            },
            resolve: (_, args, context: Context) => {
                return context.prisma.profile.create({
                    data: {
                        name: args.name,
                        lastname: args.lastame || null,
                        age: args.age || null,
                        userId: args.userId
                    }
                })
            }
        })
    }
})

// model
const User = objectType({
    name: 'User',
    definition(t) {
        t.nonNull.int('id')
        t.nonNull.string('email')
        // t.nullable.field()
        t.nullable.field('Profile', {
            type: 'Profile',
        })
        // t.nullable.int('count', {
        //     resolve: (_parent, _args, context: Context) => context.prisma.user.count()
        // })
    },
})

const Profile = objectType({
    name: 'Profile',
    definition(t) {
        t.nonNull.int('id')
        t.nonNull.string('name')
        t.nullable.string('lastname')
        t.nullable.int('age')
        t.nonNull.int('userId')
    },
})

export const schema = makeSchema({
    types: [
        Query,
        Mutation,
        User,
        Profile
    ],
    outputs: {
        schema: __dirname + '/../schema.graphql',
        typegen: __dirname + '/generated/nexus.ts',
    },
    contextType: {
        module: require.resolve('./context'),
        export: 'Context',
    },
    sourceTypes: {
        modules: [
            {
                module: '@prisma/client',
                alias: 'prisma',
            },
        ],
    },
})