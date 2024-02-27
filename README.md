# Address Book Application

This repository contains the source code for an Address Book application built using JavaScript, Node.js, and Express.js. The application allows users to manage their contacts by adding, viewing, editing, and deleting contacts.

## Build and Run Instructions

### Prerequisites

Ensure you have Node.js and npm installed on your local machine.

### Cloning the Repository

To clone this repository to your local machine, run the following command:

git clone https://github.com/ibsatassew/Address-Book-MIcroservice-in-a-container

### Installing Dependencies

Navigate to the root directory of the cloned repository and install the required dependencies by running:

npm install

### Running the Application

Start the application by running:

npm start

The server will start running on http://localhost:3000.

### Accessing API Documentation

The API documentation is available at http://localhost:3000/api-docs, where you can explore the available endpoints and interact with the API using Swagger UI.

## Containerization with Docker

### Build Docker Image

Navigate to the root directory of your project where the Dockerfile is located, and run the following command to build the Docker image:

docker build -t address-book .

This command will use the existing Dockerfile to build the Docker image named address-book.

### Run Docker Container

Once the Docker image is built, you can run a Docker container using the following command:

docker run -d -p 3000:3000 address-book

This command will start a Docker container named address-book, which is based on the address-book image. The `-p 3000:3000` flag maps port 3000 of the container to port 3000 of the host machine, allowing you to access the application at http://localhost:3000.

The application will now be running inside a Docker container.

## Learning Journey

During the development of this application, I embarked on a learning journey to understand how to build a RESTful API using Node.js and Express.js. Additionally, I explored containerization using Docker to package the application into a container for deployment. I also integrated Swagger for API documentation to enhance the usability of the API.

## Decisions and Sources

- **Node.js and Express.js**: I chose Node.js and Express.js for building the backend of the application due to their lightweight and efficient nature for building RESTful APIs.
- **Docker**: I decided to containerize the application using Docker to ensure consistency in deployment across different environments.
- **Swagger**: I integrated Swagger for API documentation to provide clear and interactive documentation for users.
- **Sources**: I referred to official documentation, online tutorials, and community forums while building the application. Some key resources include the Node.js and Express.js documentation, Docker documentation, and tutorials on Swagger integration.

Feel free to explore the source code and contribute to the development of this Address Book application!
