# Real Estate Marketplace

A full-stack real estate marketplace application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Firebase authentication.

![截圖 2025-06-30 下午10 04 37](https://github.com/user-attachments/assets/33f931fd-d131-4e11-b6cb-a61c74ea61c3)


## 🏠 Features

- **User Authentication**: Sign up, sign in, and profile management with Firebase
- **Property Listings**: Browse, search, and filter real estate properties
- **Create & Manage Listings**: Users can create, update, and delete their own property listings
- **Search Functionality**: Advanced search with filters for location, price, and property type
- **Responsive Design**: Modern UI built with React and Tailwind CSS
- **Image Upload**: Support for property images with Firebase Storage
- **User Profiles**: Personal dashboard for managing listings and account settings

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **cookie-parser** - Cookie handling

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling framework
- **Firebase** - Authentication and storage
- **React Icons** - Icon library
- **Swiper** - Carousel/slider component

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- Firebase project

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd realEstate
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   npm install
   
   # Install frontend dependencies
   cd client
   npm install
   cd ..
   ```

3. **Environment Variables**

   Create a `.env` file in the root directory:
   ```env
   MONGO=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

   Create a `.env` file in the `client` directory:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   ```

4. **Run the application**

   **Development mode:**
   ```bash
   # Start backend server
   npm run dev
   
   # In another terminal, start frontend
   cd client
   npm run dev
   ```

   **Production mode:**
   ```bash
   npm run build
   npm start
   ```

## 🚀 Usage

1. **Home Page**: Browse featured property listings
2. **Search**: Use the search functionality to find properties by location, price, or type
3. **Sign Up/Sign In**: Create an account or sign in to access additional features
4. **Create Listing**: Authenticated users can create new property listings
5. **Profile**: Manage your account and view your listings
6. **Property Details**: Click on any listing to view detailed information

## 📁 Project Structure

```
realEstate/
├── api/                    # Backend server
│   ├── controllers/        # Route controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   └── utils/             # Utility functions
├── client/                # Frontend React app
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── redux/         # State management
│   │   └── assets/        # Static assets
│   └── public/            # Public assets
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm start` - Start production server
- `npm run build` - Build for production
- `cd client && npm run dev` - Start frontend development server
- `cd client && npm run build` - Build frontend for production

## 🌐 API Endpoints

- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `GET /api/user/profile` - Get user profile
- `POST /api/user/update` - Update user profile
- `GET /api/listing/get` - Get all listings
- `POST /api/listing/create` - Create new listing
- `PUT /api/listing/update/:id` - Update listing
- `DELETE /api/listing/delete/:id` - Delete listing

## 📝 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support and questions, please open an issue in the repository.
