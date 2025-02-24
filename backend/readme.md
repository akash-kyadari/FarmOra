# FarmOra Backend

This is the backend for the FarmOra application, built with Node.js, Express, and MongoDB. It handles user authentication, product management, and cart operations.

## Installation

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/1) file in the [backend](http://_vscodecontentref_/2) directory and add the following environment variables:
    ```env
    PORT=3000
    MONGO_DB_URL=<your_mongo_db_connection_string>
    JWT_SECRET=<your_jwt_secret>
    ```

4. Start the backend server:
    ```sh
    npm run dev
    ```

## API Endpoints

- **Authentication**
  - `POST /api/auth/signup` - Register a new user
  - `POST /api/auth/login` - Login a user
  - `POST /api/auth/logout` - Logout a user
  - `GET /api/auth/me` - Get the authenticated user's details

- **Products**
  - `GET /api/products/getAllProducts` - Get all products
  - `GET /api/products/getSingleProduct/:id` - Get a single product by ID

- **Cart**
  - `GET /api/cart/getCartItems` - Get all items in the user's cart
  - `POST /api/cart/addCartItem` - Add an item to the user's cart

## Project Structure
