"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const signale_1 = __importDefault(require("signale"));
const apollo_server_1 = require("apollo-server");
const database_1 = __importDefault(require("./database/database"));
const graphQLMethods_1 = require("./persona/infrastructure/graphQLMethods");
const typePersona_1 = require("./persona/domain/typePersona");
const cors = {
    origin: '*'
};
const typeDefs = (0, apollo_server_1.gql) `
    ${typePersona_1.typePersona}
    
    type Query {
        ${typePersona_1.typePersonaQuery}
    }

    type Mutation {
        ${typePersona_1.typePersonaMutation}
    }
`;
const resolvers = {
    Query: {
        getPersonas: () => graphQLMethods_1.personaQuery.getPersonas(),
        getPersonasByName: (root, args) => graphQLMethods_1.personaQuery.getPersonasByName(args.nombre)
    },
    Mutation: {
        addPersona: (root, args) => graphQLMethods_1.personaMutation.addPersona(args.nombre, args.edad, args.trabajo, args.ciudad)
    }
};
const apolloServer = new apollo_server_1.ApolloServer({
    typeDefs, resolvers, cors
});
((0, database_1.default)().then(() => {
    apolloServer.listen().then(({ url }) => {
        signale_1.default.info(`server listening at ${url}`);
    });
}));
//# sourceMappingURL=app.js.map