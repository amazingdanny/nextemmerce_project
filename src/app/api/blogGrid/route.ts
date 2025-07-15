import { NextResponse } from 'next/server';
import blogData from '../blogGrid/blogData'; // Adjust path as needed

export async function GET() {
    return NextResponse.json(blogData, { status: 200 });
}