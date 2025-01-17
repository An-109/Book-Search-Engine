
  export interface Book {
    _id: string;
    authors: string[];
    description?: string;
    bookId: string;
    image: string;
    link: string;
    title: string;
  }
  
  export interface User {
  
    username: string;
    email: string;
    password:string;
    savedBooks: Book[];
  }
  
  export interface Auth {
    token: string;
    user: User;
  }
  
  export interface SaveBookInput {
    authors: string[];
    description?: string;
    image: string;
    link: string;
    title: string;
  }
  