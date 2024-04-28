import signale from "signale";
import { gql, ApolloServer } from "apollo-server";
import connectToServer from "./database/database";
import { personaMutation,personaQuery } from "./persona/infrastructure/graphQLMethods";
import { typePersonaQuery,typePersonaMutation,typePersona } from "./persona/domain/typePersona";

const cors = {
    origin: '*'
}

const typeDefs = gql`
    ${typePersona}
    
    type Query {
        ${typePersonaQuery}
    }

    type Mutation {
        ${typePersonaMutation}
    }
`;


const resolvers = {
    Query:{
        getPersonas: () => personaQuery.getPersonas(),
        getPersonasByName: (root:any,args:{nombre:string}) => personaQuery.getPersonasByName(args.nombre)
    },
    Mutation:{
        addPersona: (root:any,
            args:{
            nombre: string,
            edad: number,
            trabajo: string,
            ciudad: string}) => personaMutation.addPersona(args.nombre,args.edad,args.trabajo,args.ciudad)
    }
}

const apolloServer = new ApolloServer({
    typeDefs, resolvers, cors
});

(connectToServer().then(() => {
    apolloServer.listen().then(({url}) => {
        signale.info(`server listening at ${url}`);
    })
}));