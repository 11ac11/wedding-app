import { sql } from '@vercel/postgres'

console.log(sql)

console.log(process.env.POSTGRES_URL)

export const getAllGuests = async () => {
  let data

  try {
    data = await sql`SELECT * FROM guests`
    console.log(data)
    console.log('11111')
  } catch (e) {
    if (e.message.includes('relation "guests" does not exist')) {
      console.log('22222')
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      )
      // Table is not created yet
      await seed()
      data = await sql`SELECT * FROM guests`
    } else {
      throw e
    }
  }
}

export const searchGuests = async (searchTerm) => {
  let data;

  try {
    data = await sql`SELECT * FROM guests WHERE LOWER(name) LIKE ${'%' + searchTerm.toLowerCase() + '%'};`;
  } catch (e) {
    if (e.message.includes('relation "guests" does not exist')) {
      console.log('22222')
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      )
      // Table is not created yet
      await seed()
      data = await sql`SELECT * FROM guests WHERE LOWER(name) LIKE ${'%' + searchTerm.toLowerCase() + '%'};`;
    } else {
      throw e;
    }
  }

  return data;
};