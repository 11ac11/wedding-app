'use server'

import { sql } from '@vercel/postgres'
import { seed } from '@/lib/guests'

export const getAllGuests = async () => {
  try {
    const data = await sql.query(`SELECT * FROM guests`)
    return data.rows
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

    const text = `
    SELECT *
    FROM guests
    WHERE LOWER(name) LIKE $1
      OR (partner IS NOT NULL AND LOWER(partner) LIKE $2)
  `;

    const values = [
      `%${withSpaces.toLowerCase()}%`,
      `%${withSpaces.toLowerCase()}%`,
    ];

    const data = await sql.query(text, values);
    console.log(data)
    return data.rows
  } catch (e) {
    if (e.message.includes('relation "guests" does not exist')) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      )
      // Table is not created yet
      await seed()
      const data = await sql`
        SELECT *
        FROM guests
        WHERE LOWER(name) LIKE ${'%' + withSpaces.toLowerCase() + '%'}
          OR (partner IS NOT NULL AND LOWER(partner) LIKE ${'%' + withSpaces.toLowerCase() + '%'});
      `;
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

export const updateGuest = async (id, attending, starter, main, accomodation, sten, isChild, dietary_requirements) => {
  try {
    // Your update query
    const query = `
      UPDATE guests
      SET attending = $1, starter = $2, main = $3, accomodation = $4, sten = $5, is_under_14 = $6, has_amended = $7, last_amended = $8, dietary_requirements = $9
      WHERE id = $10
    `;

    // Values to be updated
    const values = [attending, starter, main, accomodation, sten, isChild === 'Yes' ? true : false, true, new Date(), dietary_requirements, id];

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