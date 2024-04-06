import { sql } from '@vercel/postgres'

export async function seed() {
  const createTable = await sql`
  CREATE TABLE IF NOT EXISTS guests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    guestlist VARCHAR(255) NOT NULL,
    attending VARCHAR(255),
    starter VARCHAR(255),
    main VARCHAR(255),
    dietary_requirements VARCHAR(255),
    accomodation VARCHAR(255),
    is_under_14 VARCHAR(255),
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_name UNIQUE (name)
  );
    `

  console.log(`Created "guests" table`)

  const guests = await Promise.all([
    sql`
          INSERT INTO guests (name, attending, guestlist, starter, main, dietary_requirements, accomodation, is_under_14)
          VALUES ('Alex Crump', 'yes', 'Alex', null, null, null, 'yes', 'no')
      `,
    sql`
          INSERT INTO guests (name, attending, guestlist, starter, main, dietary_requirements, accomodation, is_under_14)
          VALUES ('Robyn Hollis', 'yes', 'Robyn', null, null, null, 'yes', 'no')
      `,
  ])
  console.log(`Seeded ${guests.length} guests`)

  return {
    createTable,
    guests,
  }
}
