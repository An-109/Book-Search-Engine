# Book Search Engine

## Description
The **Book Search Engine** is a full-stack web application that allows users to search for books, view book details, and manage a personalized list of saved books. This app integrates with the Google Books API to provide users with book information such as title, author, description, and a direct link to the book on the Google Books site. Users can create an account, log in, save books to their account, and manage their saved books.

## Features

### General
- A navigation menu with the options: **Search for Books** and **Login/Signup**.
- An input field and a submit button to search for books.

### Search for Books
- Accessible to both logged-in and non-logged-in users.
- Displays search results, including:
  - Book title
  - Author
  - Description
  - Book cover image
  - Link to the book on the Google Books site

### Authentication
- **Login/Signup Modal:**
  - Toggle between login and signup forms.
  - Signup form includes inputs for username, email, and password.
  - Login form includes inputs for email and password.

### Logged-In Features
- Navigation menu changes to include:
  - **Search for Books**
  - **Saved Books**
  - **Logout**
- Search results include a "Save" button to add books to the user's saved list.
- Access a personalized list of saved books with options to:
  - View book details (title, author, description, image, and a link to the book).
  - Remove books from the saved list.

### Logout
- Logs the user out and resets the navigation menu to the default state (Search for Books and Login/Signup options).

## User Stories

1. **Initial View**
   - When the user loads the app, they see the navigation menu with "Search for Books" and "Login/Signup," as well as an input field and a submit button for searching books.

2. **Search Functionality**
   - Non-logged-in users can search for books and view results.
   - Logged-in users can search for books, view results, and save books to their account.

3. **Authentication**
   - Users can create an account by providing a username, email, and password.
   - Existing users can log in using their email and password.
   - Upon successful login or signup, the user is automatically logged in, and the navigation menu updates.

4. **Saved Books**
   - Logged-in users can view their saved books.
   - Each saved book displays the book's details and includes a "Remove" button to delete it from the saved list.

5. **Logout**
   - Users can log out, returning the app to its default state.

## Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd your-directory
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Building the dist:
   ```bash
   npm run build
   ```

### Usage
1. Start the development server:
   ```bash
   npm run develop
   ```
2. Open the app in your browser at `http://localhost:3000`.

## Technologies Used
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **API Integration:** Google Books API

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

