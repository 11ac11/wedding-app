'use server'
import { sql } from '@vercel/postgres'
import { seed } from '@/lib/guests'

export const getAllGuests = async () => {
  try {
    const data = await sql`SELECT * FROM guests`
    return data
  } catch (e) {
    if (e.message.includes('relation "guests" does not exist')) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      )
      // Table is not created yet
      await seed()
      const data = await sql`SELECT * FROM guests`
      return data
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

export const postGuests = async (body) => {
  try {
    const data = await sql`INSERT INTO guests (name, guestlist) VALUES (${body.name}, ${body.guestlist})`;
    return data
  } catch (e) {
    console.error('API error', e)
    // if (e.message.includes('relation "guests" does not exist')) {
    //   console.log(
    //     'Table does not exist, creating and seeding it with dummy data now...'
    //   )
    //   // Table is not created yet
    //   await seed()
    //   const data = await sql`SELECT * FROM guests WHERE LOWER(name) LIKE ${'%' + withSpaces.toLowerCase() + '%'};`;
    throw e;
  }

  return data;
};