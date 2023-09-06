# NoteHub API Routes

## Introduction

Welcome to the NoteHub API documentation. This API serves as the backend for the NoteHub application, providing the necessary endpoints to manage user accounts and notes.

## Base URL

The base URL for all API endpoints is: `https://desafio3-modalgr.vercel.app/`

### User Login

- **Method:** `POST`
- **Endpoint:** `/auth`
- **Description:** Log in an existing user.
- **Request Body:**

  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }

**Response:** Returns a JSON Web Token (JWT) upon successful login.

### User Registration

- **Method:** `POST`
- **Endpoint:** `/users/signup`
- **Description:** Register a new user account.
- **Request Body:**

  ```json
  {
    "username": "your_username",
    "email": "your_email@example.com",
    "password": "your_password"
  }
