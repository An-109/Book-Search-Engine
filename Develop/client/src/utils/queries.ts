import { gql } from '@apollo/client';

export const GET_ME = gql`
   query GetSingleUser {
  getSingleUser {
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
export const SEARCH_GOOGLE_BOOKS = gql`
  query SearchGoogleBooks($query: String!) {
    searchGoogleBooks(query: $query) {
      id
      title
      authors
      description
      image
    }
  }
`;