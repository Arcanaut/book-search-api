import gql from 'graphql-tag';

// queries only for logged in users
export const GET_ME = gql `
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;