import { NextResponse } from 'next/server';
import { createUser } from 'app/db';

export async function GET() {
  try {
    const email = 'test@example.com';
    const password = 'password123';

    const result = await createUser(email, password);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
