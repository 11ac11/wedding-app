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

// // console.log(await getAllGuests())

export const searchGuests = async (searchTerm) => {
  try {
    const data = await sql`SELECT * FROM guests WHERE LOWER(name) LIKE ${'%' + searchTerm.toLowerCase() + '%'};`;
    console.log(data)
    console.log('11111')
    return data
  } catch (e) {
    if (e.message.includes('relation "guests" does not exist')) {
      console.log('22222')
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      )
      // Table is not created yet
      await seed()
      const data = await sql`SELECT * FROM guests WHERE LOWER(name) LIKE ${'%' + searchTerm.toLowerCase() + '%'};`;
    } else {
      throw e;
    }
  }

  return data;
};

const searchTerm = 'alex'

export const searchGuests2 = async () => {
  const client = createClient('postgres://default:Bv4pf7EHdjVN@ep-restless-recipe-67392034.eu-central-1.postgres.vercel-storage.com/verceldb');
  await client.connect();

  console.log(client)

  try {
    const data = await client.sql`SELECT * FROM guests WHERE LOWER(name) LIKE ${'%' + 'alex' + '%'};`;
    console.log('in api:', data)
    return data
  } catch (e) {
    throw e
  }
}
