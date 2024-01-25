'use server'
import { sql } from '@vercel/postgres'

export const getAllGuests = async () => {
  try {
    const data = await sql`SELECT * FROM guests`
    console.log('11111')
    return data
  } catch (e) {
    if (e.message.includes('relation "guests" does not exist')) {
      console.log('22222')
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      )
      // Table is not created yet
      // await seed()
      // const data = await client.sql`SELECT * FROM guests`
    } else {
      throw e
    }
  }
}

export const searchGuests = async (searchTerm) => {
  try {
    const withSpaces = searchTerm.replace('+', ' ')

    const data = await sql`SELECT * FROM guests WHERE LOWER(name) LIKE ${'%' + withSpaces.toLowerCase() + '%'};`;
    return data
  } catch (e) {
    if (e.message.includes('relation "guests" does not exist')) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      )
      // Table is not created yet
      await seed()
      const data = await sql`SELECT * FROM guests WHERE LOWER(name) LIKE ${'%' + withSpaces.toLowerCase() + '%'};`;
    } else {
      throw e;
    }
  }

  return data;
};
