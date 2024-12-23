import User,{UserDocument} from '../models/User.js'
import Book,{BookDocument} from '../models/Book.js'

import { signToken } from '../services/auth.js';
interface AuthPayload{
    token: string;
    user:UserDocument;
}
const resolver={
    Query:{
        book: async(): Promise<BookDocument[]>=>{
            return Book.find({});
        },
        getSingleUser: async (_: any, { id, username }: { id?: string; username?: string }, { user }: { user: UserDocument }) => {
            const foundUser = await User.findOne({
              $or: [
                { _id: user ? user._id : id },
                { username: username },
              ],
            });
            return foundUser;
    },
    User: {
        isCorrectPassword: async (user: UserDocument, { password }: { password: string }): Promise<boolean> => {
          return user.password === password;  
        },
        bookCount: (user: UserDocument): number => {
          return user.savedBooks.length; 
        },

      },
    Mutation:{
        createUser: async (_parent:any,{username,password,email}:{username:string;password:string;email:string;}):Promise<AuthPayload>=>{
            const newUser = new User({username,password,email});
            await newUser.save();
            const token = signToken(newUser.username, newUser.email, newUser._id);
            return{
                token,
                user:newUser,
            };

        },
        saveBook: async (_parent:any,{bookId, description,authors,image,link,title}:{bookId:string; description:string;authors:string; image:string;link:string;title:string;})=>{
            return await Book.create({bookId, description,authors,image,link,title})
        },
        deleteBook: async (_parent:any,{bookId, title}:{bookId:string; title:string;})=>{
            return await Book.deleteOne({bookId,title})
        }
        
    }
}


};

export default resolver;