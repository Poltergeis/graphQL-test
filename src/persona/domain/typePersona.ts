export const typePersona =
`type Persona{
    nombre: String!
    edad: Int!
    trabajo: String!
    mayorDeEdad: Boolean!
    ciudad: String!
}`

export const typePersonaQuery =
`   
getPersonas: [Persona]    
getPersonasByName(nombre:String!): [Persona]
`

export const typePersonaMutation =
`
addPersona(
    nombre: String!
    edad: Int!
    trabajo: String!
    ciudad: String!
): Persona
`