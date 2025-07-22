
Setup Instructions
  1. Clone the Repository
     Use the following command to clone the project into your local directory:
     
        git clone <-repo-url>
        cd backend-server

  2. Install Dependencies
  Install all required Node.js packages:

        npm install
        This will install dependencies listed in package.json (e.g., express, mysql2, dotenv).

  3. Project Structure Overview
  Once installed, your project folder will include the following structure:

        index.js — main entry point for the application
        
        routes/ — route definitions (e.g., /users)
        
        controllers/ — handle request/response logic
        
        services/ — database interaction logic
        
        db/ — MySQL connection setup
        
        .env — environment variables (for DB credentials, port, etc.)
        
        package.json — project metadata and scripts

  4. Configure MySQL Database
  Open your MySQL client or terminal and run:

      CREATE DATABASE IF NOT EXISTS userdb;
      USE your databse name;
      Then, create the users table:


      CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        firstName VARCHAR(100),
        lastName VARCHAR(100),
        email VARCHAR(255),
        age INT,
        gender VARCHAR(20),
        city VARCHAR(100)
      );


  5. Configure Environment Variables
  Create a .env file in the root folder and add your MySQL database credentials:

        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=your_mysql_password
        DB_NAME=userdb
        PORT=3000
        Do not commit this file to version control.
  
  6. Run the Server
  Start the server in development mode:

      npm run dev
      http://localhost:3000/users
      This will return the list of users from the MySQL database.
