import User from "../models/User.js";
// import Book, { BookDocument } from "../models/Book.js";
import { GraphQLError } from 'graphql';

import { signToken } from "../services/auth.js";

const resolver = {
  Query: {
    getSingleUser: async (_parent: any, _args: any, context: any) => {
      if (context?.user) {
        const foundUser = await User.findOne({ _id: context.user._id });

        if (!foundUser) {
          throw new  GraphQLError("User does not exist!")
        
        }

        return foundUser;
      } else {
        throw new  GraphQLError("auth error")
      }
    },
  },
  // searchGoogleBooks: async (_parent:any, { query }:any, _context:any) => {
  //   const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;
    
  //   try {
  //     const response = await fetch(apiUrl);
  //     const data = await response.json();
  
  //     return data.items.map((book:any) => ({
  //       id: book.id,
  //       title: book.volumeInfo.title || 'No title available',
  //       authors: book.volumeInfo.authors || ['No author available'],
  //       description: book.volumeInfo.description || 'No description available',
  //       image: book.volumeInfo.imageLinks?.thumbnail || '',
  //     }));
  //   } catch (error) {
  //     console.error('Error fetching books:', error);
  //     throw new Error('Failed to fetch books');
  //   }
  // },
  Mutation: {
    createUser: async (
      _parent: any,
      args: { username: string; email: string; password: string },
      _context: any
    ) => {
      const user = await User.create(args);

      if (!user) {
        return null;
      }
      const token = signToken(user.username, user.email, user._id);
      return { token, user };
    },

    login: async (
      _parent: any,
      args: { email: string; password: string },
      _context: any
    ) => {
      const user = await User.findOne({ email: args.email });
      if (!user) {
        throw new  GraphQLError("User does not exist!")
      }

      const correctPw = await user.isCorrectPassword(args.password);

      if (!correctPw) {
        return null;
      }
      const token = signToken(user.username, user.email, user._id);
      return { token, user };
    },

    saveBook : async (_parent:any,args:any,context:any) => {
      console.log(args)
      try {
        
        const updatedUser = await User.findOneAndUpdate(
          {_id: context.user._id},
          { $addToSet: { savedBooks: [args["book"]] } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      } catch (err) {
        console.log(err);
        return null;
      }
    },
    deleteBook : async (_parent:any,args:any,context:any) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: { bookId: args.params.bookId } } },
        { new: true }
      );
      if (!updatedUser) {
        return null;
      }
      return updatedUser
    }
  },

};

export default resolver;
