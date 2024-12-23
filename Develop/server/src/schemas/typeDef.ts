const typeDef = `
    type Book{
        _id:ID!
        title:String!
        authors: [String]!
        description: String!
        image: String!
        link: String!
    }
   
    type User{
        _id:ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]!
        isCorrectPassword(password: String!): Boolean!
        bookCount:Number!
    }
    type Query{
        book:[Book]
        user(_id:String):[User]
        getSingleUser(id: ID, username: String): User
       
    }
    type Mutation{
        createUser(username:String!,email:String!,password:String!):Auth!
        
        login(username:String!,password:String!):CorrectPass!
        saveBook(_id:String!,savedBooks:[BookDocument]! ):User
        deleteBook(bookId:ID!):User
    }

`;

export default typeDef;