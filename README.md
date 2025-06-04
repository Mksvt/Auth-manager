# Admin Panel with Todo List

Welcome to the **Admin Panel with Todo List** project! This is a web-based application built with React, TypeScript, and Firebase, designed to manage tasks with role-based access control (admin, editor, viewer). The application provides a clean and intuitive interface for creating, editing, deleting, and tracking todos, with secure authentication and authorization.

## Features

- **User Authentication**: Register and log in with email and password using Firebase Authentication.
- **Role-Based Access**: Three user roles:
  - **Admin**: Full access to create, edit, delete, and manage todos.
  - **Editor**: Can create, edit, and delete todos.
  - **Viewer**: Read-only access to view todos.
- **Todo Management**: Add, edit, delete, and toggle the status of todos.
- **Real-Time Updates**: Changes to todos are synced in real-time using Firestore.
- **Responsive Design**: Built with Tailwind CSS for a modern and responsive UI.

## Technologies Used

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Backend/Database**: Firebase (Authentication, Firestore)
- **Routing**: React Router DOM
- **State Management**: React Context API


## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/admin-panel-todo.git
   cd admin-panel-todo
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Firebase**:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project (if you haven’t already).
   - Enable **Email/Password Authentication** in the Authentication section.
   - Set up **Firestore Database** and configure security rules.
   - Copy your Firebase configuration object from **Project Settings** > **General** > **Your apps**.
   - Create a file named `firebase/config.ts` in the `src` directory and paste the configuration:
     ```typescript
     import { initializeApp } from "firebase/app";
     import { getAuth } from "firebase/auth";
     import { getFirestore } from "firebase/firestore";

     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID",
       measurementId: "YOUR_MEASUREMENT_ID"
     };

     const app = initializeApp(firebaseConfig);
     export const auth = getAuth(app);
     export const db = getFirestore(app);
     ```
     Replace `YOUR_API_KEY`, etc., with your actual Firebase config values.

4. **Run the Application**:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Usage

1. **Register a New Account**:
   - Navigate to `/register`.
   - Enter an email, password (minimum 6 characters), and select a role (admin, editor, viewer).
   - Submit the form to create an account.

2. **Log In**:
   - Navigate to `/login`.
   - Enter your registered email and password.
   - Click "Login" to access the dashboard.

3. **Manage Todos**:
   - On the `/dashboard` page, use the form to create new todos (title and description).
   - Admins and editors can edit or delete todos, while viewers can only view them.
   - Toggle the status of todos using the checkbox.
