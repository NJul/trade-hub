const { db } = require('@vercel/postgres');
const {
  invoices,
  sellers,
  income,
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedInvoices(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS invoices (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    seller_id UUID NOT NULL,
    amount INT NOT NULL,
    status VARCHAR(255) NOT NULL,
    date DATE NOT NULL
  );
`;

    console.log(`Created "invoices" table`);

    // Insert data into the "invoices" table
    const insertedInvoices = await Promise.all(
      invoices.map(
        (invoice) => client.sql`
        INSERT INTO invoices (seller_id, amount, status, date)
        VALUES (${invoice.seller_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedInvoices.length} invoices`);

    return {
      createTable,
      invoices: insertedInvoices,
    };
  } catch (error) {
    console.error('Error seeding invoices:', error);
    throw error;
  }
}

async function seedSellers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "sellers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS sellers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "sellers" table`);

    // Insert data into the "sellers" table
    const insertedSellers = await Promise.all(
      sellers.map(
        (seller) => client.sql`
        INSERT INTO sellers (id, name, email, image_url)
        VALUES (${seller.id}, ${seller.name}, ${seller.email}, ${seller.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedSellers.length} sellers`);

    return {
      createTable,
      sellers: insertedSellers,
    };
  } catch (error) {
    console.error('Error seeding sellers:', error);
    throw error;
  }
}

async function seedIncome(client) {
  try {
    // Create the "income" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS income (
        month VARCHAR(4) NOT NULL UNIQUE,
        income INT NOT NULL
      );
    `;

    console.log(`Created "income" table`);

    // Insert data into the "income" table
    const insertedIncome = await Promise.all(
      income.map(
        (item) => client.sql`
        INSERT INTO income (month, income)
        VALUES (${item.month}, ${item.income})
        ON CONFLICT (month) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedIncome.length} income`);

    return {
      createTable,
      income: insertedIncome,
    };
  } catch (error) {
    console.error('Error seeding income:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedSellers(client);
  await seedInvoices(client);
  await seedIncome(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
