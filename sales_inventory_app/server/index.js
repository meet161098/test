// const express = require('express');
// const app = express();
// const PORT = 5000;

// app.use(express.json());

// // Sample route for the sales data
// // app.get('/sales_data', (req, res) => {
// //    res.json({
// //       message: 'Sales Data'
// //    });
// // });
// app.get('/sales_data', (req, res) => {
//     const salesData = [
//        { date: '2024-09-21', product: 'Product A', quantity: 100, total: 1000 },
//        { date: '2024-09-20', product: 'Product B', quantity: 50, total: 500 },
//     ];
//     res.json(salesData);
//  });
// // Inventory Data API
// app.get('/inventory', (req, res) => {
//     const inventory = [
//        { itemId: '1', name: 'Product A', stock: 150, price: 10 },
//        { itemId: '2', name: 'Product B', stock: 200, price: 15 },
//     ];
//     res.json(inventory);
//  });
 
//  // User Data API
//  app.get('/users', (req, res) => {
//     const users = [
//        { userId: '1', name: 'John Doe', role: 'Admin' },
//        { userId: '2', name: 'Jane Smith', role: 'User' },
//     ];
//     res.json(users);
//  });
  

// app.listen(PORT, () => {
//    console.log(`Server running on port ${PORT}`);
// });
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Mock Sales Data
const salesData = [
   { date: '2024-09-21', product: 'Product A', quantity: 100, total: 1000 },
   { date: '2024-09-20', product: 'Product B', quantity: 50, total: 500 },
];

// Mock Inventory Data
const inventoryData = [
   { itemId: '1', name: 'Product A', stock: 150, price: 10 },
   { itemId: '2', name: 'Product B', stock: 200, price: 15 },
];

// Mock Users Data
const usersData = [
   { userId: '1', name: 'John Doe', role: 'Admin' },
   { userId: '2', name: 'Jane Smith', role: 'User' },
];

// Sales Data API
app.get('/sales_data', (req, res) => {
   res.json(salesData);
});

// Inventory Data API
app.get('/inventory', (req, res) => {
   res.json(inventoryData);
});

// Users Data API
app.get('/users', (req, res) => {
   res.json(usersData);
});

// Start the server
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
