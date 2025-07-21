const express = require('express');
const app = express();
const userRoutes = require('./route/user.route');
require('dotenv').config();

app.use(express.json());
app.use('/', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});