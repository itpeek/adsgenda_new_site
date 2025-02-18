// File: src/app/api/contact/route.js
'use server'
import { neon } from '@neondatabase/serverless';

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
    }

    // Connect to Neon database
    const sql = neon(process.env.DATABASE_URL);

    // Insert form data into the get_in_touch table
    await sql(`
      INSERT INTO get_in_touch (name, email, subject, message, created_at)
      VALUES ($1, $2, $3, $4, NOW())`, [name, email, subject, message]);

    // Send a success response
    return new Response(JSON.stringify({ status: 'success', message: 'Form submitted successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error inserting data:', error);
    return new Response(JSON.stringify({ status: 'error', message: 'Error submitting form' }), { status: 500 });
  }
}
