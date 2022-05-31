# Refera - Fullstack Code Challenge

## Description

Welcome to Refera's Fullstack code challenge! The goal of this challenge is to create a web application to manage maintanence orders from Refera, following the **Acceptance criteria**. The frontend of application has only one page and the backend contains a simple REST API service and has a connection with a database. By the end of the challenge, we will be able to create new orders and list them through the web application that comunicates with our backend service to read and store the data in a database.

We use React and Django in our real application, feel comfortable to chose the appropriate technology you are familiar with. Elaborate briefly the architectural decisions, design patterns and frameworks you used on your solution.


## Resources

![image](https://user-images.githubusercontent.com/10841710/141149769-d2bef978-7073-4ac7-b0af-6c0c8c7b6fe8.png)


## Acceptance criteria

- Provide clear instructions on how to run the application in development mode

1) git clone git@github.com:macuacuafrancisco/refera-fullstack-challenge.git
2) Go to project root root (cd refera-fullstack-challenge)
3) > npm install
4) > npm run dev
5) git clone git@github.com:macuacuafrancisco/refera-fullstack-challenge-front.git
6) > npm install
7) > npm start

- Provide clear instructions on how the application would run in a production environment

1) We can use two different approaches, 
2) first is to create a nested client with the frontend implementation and configure script to run a post build on our backend, with this configuration every time we build the core a HTML webpage is genarated by post bulid configuration
3) second, we can run the front-end and backend in two different port, this is recommended for VPSs

- Describe how you would implement an authentication layer for the web application (don't need to implement)

1) We install  JsonWebToken On Backend, this JsonWebToken receives plain password and converts in a hash password, we store thr hashed password on our database, every time the user signs in  the backend Application return a token to frontend
2) Every Request that needs authorization must contains the token and the backend validates de token using the hash algorhitm


- RESTful API allowing CRUD and list operations on the orders
  - Endpoint to create/retrieve/update/delete order
1) http://localhost:8000/api/orders (POST)
2) http://localhost:8000/api/orders/{id} (PUT)
3) http://localhost:8000/api/orders/{id} (DELETE)

  - Endpoint to list order
4)  - http://localhost:8000/api/orders (GET)


- RESTful API allowing CRUD operations on the categories
  - Endpoint to create/retrieve/update/delete category
1) http://localhost:8000/api/categories (POST)
2) http://localhost:8000/api/categories/{id} (PUT)
3) http://localhost:8000/api/categories/{id} (DELETE)


  - Endpoint to list categories
4)  - http://localhost:8000/api/categories (GET)


- Database to store data from the following resources
  - Order
  - Category

R) We use MongoAtlas Could 
1) create a file called .env and paste the following code

MONGO_URI=mongodb+srv://iconet:9CDxBfhea9fhvExm@cluster0.f8hf8.mongodb.net/refera?retryWrites=true&w=majority
PORT=8000
jwtSecret=mysecret-c

- Describe how you would structure the database to account for 
  - Real estate agency registration data
  - Company registration data
  - Contact registration data
  - Describe what needs to be changed on the API you implemented
- One web page, following the low fidelity prototype presented on the **Resources**
  - Table with orders data, allowing the user to order the results by each column
  - Button to open modal to create new order
  - Allow row click to open modal to visualize order details
- Modal to input data to create new order
  - Form with appropriate inputs to handle each type of data
  - Allow selection of registered categories from the database
  - Save button to hit backend service and store the data
- Modal to read only the order details

## Challenge guidelines

- The usage of git will be taken into consideration on the evaluation
- For this challenge, **Create** a repository in your Github account
- You can create a private repository in your account if you want
- If your repository is private, share your repository with email: suporte@refera.com.br
- Send a email with the link of your repository to: suporte@refera.com.br
- Remenber, all the written information requested on **Acceptance criteria** should be added on a README.md file inside the your repository
