import { gql } from '@apollo/client';
 
export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}

`
export const DELETE_BOOK = gql`mutation DeleteBook($bookId: ID) {
  deleteBook(bookId: $bookId) {
    _id
    email
    username
  }
}
  
`

export const SAVE_BOOK = gql
`mutation Mutation($book: BookChange!) {
  saveBook(book: $book) {
    _id
    email
    username
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}

`