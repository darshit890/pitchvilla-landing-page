// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body);
    
    // Validate the input
    const { fullName, email, phoneNumber, userType } = body;
    
    if (!fullName || !email || !phoneNumber || !userType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Insert the user into the Supabase database with a generated UUID
    const { data, error } = await supabase
      .from('User')
      .insert([
        {
          id: uuidv4(), // Generate a UUID for the id field
          fullName,
          email,
          phoneNumber,
          userType,
          createdAt: new Date().toISOString()
        }
      ])
      .select();
    
    if (error) {
      console.error('Error creating user:', error.message);
      return NextResponse.json(
        { error: 'Failed to create user' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ success: true, user: data[0] }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}