const axios = require('axios');
const db = require('./db');

async function seedUsers() {
  try {
    const response = await axios.get('https://dummyjson.com/users');
    const users = response.data.users;

    for (const user of users) {
      const { firstName, lastName, email, age, gender, address } = user;
      const city = address.city;

      await db.query(
        `INSERT INTO users (firstName, lastName, email, age, gender, city)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [firstName, lastName, email, age, gender, city]
      );
    }

    console.log('Users successfully seeded from dummyjson.com');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding users:', err.message);
    process.exit(1);
  }
}

seedUsers();
