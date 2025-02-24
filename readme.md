# PkShop - Online Store

PkShop is an online store built using React.js, designed to allow users to view products, add desired items to their shopping cart, and make purchases. This application uses Axios to fetch data from the backend and SweetAlert2 to display various notifications.

## Features
- View products available for purchase.
- Add items to the shopping cart.
- Show product details, including price and description.
- Notifications when items are added to the cart using SweetAlert.
- Fully responsive design for both mobile and desktop screens.

## Technologies Used
- **React.js**: Frontend framework for building the user interface.
- **Axios**: To fetch data from the backend.
- **SweetAlert2**: For displaying notifications such as success or error alerts.
- **Tailwind CSS**: For styling and designing the components.
- **Backend**: Simulated API running locally to handle the cart data.

## Setup Instructions

To clone and set up the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/GodzK/pkshop.git
Install necessary dependencies:

Navigate to the project folder and run:

bash
คัดลอก
แก้ไข
npm install
Start the React app:

Run the following command:

bash
คัดลอก
แก้ไข
npm start
Backend Setup:

The backend is built with Express.js and MongoDB.
It supports operations such as adding items to the cart, viewing cart items, and deleting items from the cart.
Connect the backend:

Ensure your backend server is running. The backend listens on port 8777 by default.

Access the app:

Open your browser and go to http://localhost:5173 to view the app in action.

Backend Routes:
GET /cart: Fetches all items in the cart.
POST /add: Adds an item to the cart.
DELETE /delete/:id: Deletes an item from the cart by ID.
Demo Screenshots
You can showcase the interface or screenshots of the app here.

Backend Setup:

Express.js and MongoDB are used to handle requests for adding products, viewing cart items, and deleting items.
The MongoDB database used is called PhakapholDB, and it stores information about the cart items.
The backend allows the addition of items to a cart, deletion of items, and retrieval of all cart data.
typescript
คัดลอก
แก้ไข
