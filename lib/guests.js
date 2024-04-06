import { sql } from '@vercel/postgres'

export async function seed() {
  const createTable = await sql`
  CREATE TABLE IF NOT EXISTS guests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    guestlist VARCHAR(255) NOT NULL,
    attending BOOLEAN,
    dietary_requirements VARCHAR(255),
    allergies VARCHAR(255),
    interested_in_accommodation BOOLEAN,
    is_under_14 BOOLEAN,
    kids_meal BOOLEAN,
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );
    `

  console.log(`Created "guests" table`)

  const guests = await Promise.all([
    sql`
          INSERT INTO guests (name, attending, guestlist, dietary_requirements, allergies, interested_in_accommodation, is_under_14)
          VALUES ('Alex Crump', 'true', 'Alex', null, null, true, false)
      `,
    sql`
          INSERT INTO guests (name, attending, guestlist, dietary_requirements, allergies, interested_in_accommodation, is_under_14)
          VALUES ('Robyn Hollis', 'true', 'Robyn', null, null, true, false)
      `,
  ])
  console.log(`Seeded ${guests.length} guests`)

  return {
    createTable,
    guests,
  }
}
