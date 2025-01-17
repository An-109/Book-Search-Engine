const typeDef = `

    type Book {
        bookId:ID!
        authors: [String]
        description: String
        image: String
        link: String
        title:String!
    }
    input BookChange {
        bookId:String
        authors: [String]
        description: String
        image: String
        link: String
        title:String!
    }

    type User {
         _id : ID!
        username: String
        email: String
        savedBooks: [Book]
    } 

    type Auth {
        token: String
        user: User
    }

    type Query {
        getSingleUser: User
        searchGoogleBooks(query: String!): [Book]!
    }


    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(book: BookChange!): User
        deleteBook(bookId:ID): User
    }

`;

// const typeDef = `
//     type Book{
//         _id:ID!
//         title:String!
//         authors: [String]!
//         description: String!
//         image: String!
//         link: String!
//     }

//     type User{
//         _id:ID!
//         username: String!
//         email: String!
//         password: String!
//         savedBooks: [Book]!
//         bookCount:Number!
//     }
//     type Query{
//         book:[Book]
//         user(_id:String):[User]
//         getSingleUser(id: ID, username: String): User

//     }
//     type Mutation{
//         createUser(username:String!,email:String!,password:String!):Auth!

//         login(username:String!,password:String!):CorrectPass!
//         saveBook(_id:String!,savedBooks:[BookDocument]! ):User
//         deleteBook(bookId:ID!):User
//     }

// `;

export default typeDef;
