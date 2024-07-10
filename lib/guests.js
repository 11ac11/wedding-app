import { sql } from '@vercel/postgres'

export async function seed() {
  const createTable = await sql`
    CREATE TABLE IF NOT EXISTS guests (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      partner VARCHAR(255),
      guestlist VARCHAR(255) NOT NULL,
      has_amended BOOLEAN,
      last_amended TIMESTAMP WITH TIME ZONE,
      attending VARCHAR(255),
      starter VARCHAR(255),
      main VARCHAR(255),
      dietary_requirements VARCHAR(255),
      accomodation VARCHAR(255),
      sten VARCHAR(255),
      is_under_14 BOOLEAN,
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT unique_name UNIQUE (name)
    );
  `

  console.log(`Created "guests" table`)

  const guests = await Promise.all([
    sql`
          INSERT INTO guests (name, attending, guestlist, has_amended, last_amended, starter, main, dietary_requirements, accomodation, sten, is_under_14)
          VALUES ('Alex Crump', 'yes', 'Alex', null, null null, null, null, 'yes', 'no')
      `,
    sql`
          INSERT INTO guests (name, attending, guestlist, has_amended, last_amended, starter, main, dietary_requirements, accomodation, sten, is_under_14)
          VALUES ('Robyn Hollis', 'yes', 'Robyn', null, null, null, null, null, 'yes', 'no')
      `,
  ])
  console.log(`Seeded ${guests.length} guests`)

  return {
    createTable,
    guests,
  }
}
