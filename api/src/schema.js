const { gql } = require("apollo-server");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type Query {
    pets: [Pet]!
    pet(id: ID!): Pet!
  }

  type Mutation {
    createPet(input: PetInput): Pet!
  }

  type Pet {
    id: ID!
    name: String!
    type: String!
    img: String!
    createdAt: String!
    owner: User!
  }

  input PetInput {
    name: String!
    type: String!
  }

  type User {
    id: ID!
    username: String!
    pets: [Pet]!
  }
`;

module.exports = typeDefs;
