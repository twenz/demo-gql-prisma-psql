/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Profile: { // root type
    age?: number | null; // Int
    id: number; // Int!
    lastname?: string | null; // String
    name: string; // String!
    userId: number; // Int!
  }
  Query: {};
  User: { // root type
    Profile?: NexusGenRootTypes['Profile'] | null; // Profile
    email: string; // String!
    id: number; // Int!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    addProfile: NexusGenRootTypes['Profile']; // Profile!
    addUser: NexusGenRootTypes['User']; // User!
  }
  Profile: { // field return type
    age: number | null; // Int
    id: number; // Int!
    lastname: string | null; // String
    name: string; // String!
    userId: number; // Int!
  }
  Query: { // field return type
    allUser: NexusGenRootTypes['User'][]; // [User!]!
    allUserCount: number | null; // Int
  }
  User: { // field return type
    Profile: NexusGenRootTypes['Profile'] | null; // Profile
    email: string; // String!
    id: number; // Int!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    addProfile: 'Profile'
    addUser: 'User'
  }
  Profile: { // field return type name
    age: 'Int'
    id: 'Int'
    lastname: 'String'
    name: 'String'
    userId: 'Int'
  }
  Query: { // field return type name
    allUser: 'User'
    allUserCount: 'Int'
  }
  User: { // field return type name
    Profile: 'Profile'
    email: 'String'
    id: 'Int'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addProfile: { // args
      age?: number | null; // Int
      lastame?: string | null; // String
      name: string; // String!
      userId: number; // Int!
    }
    addUser: { // args
      email: string; // String!
    }
  }
  Query: {
    allUser: { // args
      email?: string | null; // String
      id?: Array<number | null> | null; // [Int]
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}