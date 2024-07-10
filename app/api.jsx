'use server'

import { sql } from '@vercel/postgres'
import { seed } from '@/lib/guests'

export const getAllGuests = async () => {
  try {
    const data = await sql`SELECT * FROM guests`
    console.log(data.rows)
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
    const withSpaces = searchTerm

    const data = await sql`
      SELECT *
      FROM guests
      WHERE LOWER(name) LIKE ${'%' + withSpaces.toLowerCase() + '%'}
        OR (partner IS NOT NULL AND LOWER(partner) LIKE ${'%' + withSpaces.toLowerCase() + '%'});
    `;
    return data
  } catch (e) {
    if (e.message.includes('relation "guests" does not exist')) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      )
      // Table is not created yet
      await seed()
      const data = await sql`SELECT * FROM guests WHERE LOWER(name) LIKE ${'%' + withSpaces.toLowerCase() + '%'};`;
      return data
    } else {
      throw e;
    }
  }
};

export const postGuests = async (body) => {
  try {
    for (const guest of body) {
      const { name, guestlist, partner } = guest;
      try {
        const query = `INSERT INTO guests (name, guestlist, partner) VALUES ($1, $2, $3)`
        const values = [name, guestlist, partner]
        // Execute the post query
        const result = await sql.query(query, values);
        console.log(`${result.rowCount} row(s) updated`);
      } catch (e) {
        console.error('ERROR in posting', name, e)
      }
    }
    return true
  } catch (e) {
    console.error('API error', e)
    throw e;
  }
};

export const updateGuest = async (id, attending, starter, main, accomodation, isChild) => {
  try {
    // Your update query
    const query = `
      UPDATE guests
      SET attending = $1, starter = $2, main = $3, accomodation = $4, is_under_14 = $5
      WHERE id = $6
    `;

    // Values to be updated
    const values = [attending, starter, main, accomodation, isChild, id];

    // Execute the update query
    const result = await sql.query(query, values);
    console.log(`${result.rowCount} row(s) updated`);
    return true
  } catch (error) {
    console.error('Error during update:', error);
  }
}

export const deleteGuest = async (ids) => {
  try {
    // Your delete query TODO: check
    const query = `DELETE guests WHERE id = $1`;

    // Execute the deleted query
    const result = await sql.query(query, ids);
    console.log(`${result.rowCount} row(s) delete`);
    return true
  } catch (error) {
    console.error('Error during delete:', error);
  }
}