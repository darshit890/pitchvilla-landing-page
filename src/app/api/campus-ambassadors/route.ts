// app/api/campus-ambassadors/route.ts
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
    const { fullName, phoneNumber, cityName, collegeName } = body;
    
    if (!fullName || !phoneNumber || !cityName || !collegeName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Insert the campus ambassador into the Supabase database
    const { data, error } = await supabase
      .from('CampusAmbassador')
      .insert([
        {
          id: uuidv4(),
          fullName,
          phoneNumber,
          cityName,
          collegeName,
          createdAt: new Date().toISOString()
        }
      ])
      .select();
    
    if (error) {
      console.error('Error creating campus ambassador:', error.message);
      return NextResponse.json(
        { error: 'Failed to create campus ambassador' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ success: true, ambassador: data[0] }, { status: 201 });
  } catch (error) {
    console.error('Error creating campus ambassador:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { error: 'Failed to create campus ambassador' },
      { status: 500 }
    );
  }
}