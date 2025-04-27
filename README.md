# Task Manager Application

This repository contains a **Task Manager** application built using **Angular** for the frontend and **Node.js + Express** for the backend, with **MongoDB** as the database. It allows users to register, log in, and manage tasks with drag-and-drop functionality.

## Features

- **User Authentication**: Register and log in with JWT-based authentication.
- **Task Management**: Create, edit task, and and move them between columns (Todo, In Progress, Completed).
- **Drag-and-Drop**: Drag tasks between columns for better task organization.
- **Responsive Design**: Built to be responsive, ensuring a smooth experience.
- **Task Details**: View and edit task details inline.

## Technologies Used

### Frontend:
- **Angular (Version 19.2.8)**
- **Reactive Forms** for user registration, login, and form validation
- **Bootstrap** for UI components
- **CDK Drag-and-Drop** for task column movement

### Backend:
- **Node.js + Express.js**
- **MongoDB** for storing tasks and user information
- **JWT (JSON Web Tokens)** for secure authentication
- **Bcrypt** for hashing user passwords
- **express-validator** for validation

## Setup

### Backend Setup (Node.js + Express + MongoDB)
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager/backend
2. Install dependencies:
    ``` bash
    npm install
3. Set up MongoDB and create a .env file with appropriate settings.
4. Start the backend server:
    ``` bash
    nodemon app.js
   
### FRONTEND Setup (Angular)
1. Navigate to the frontend directory:
    ``` bash
    cd frontend
2. Install Dependencies:
    ``` bash
    npm install
3. Start the Angular development server:
     ``` bash
     ng serve
   
