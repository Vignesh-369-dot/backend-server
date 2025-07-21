const userService = require('../service/user.service');

async function fetchAllUsers(req, res) {
    try {
        const user = new userService();
        const users= await user.getAllUsers();
        console.log(users);
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
fetchAllUsers,
};