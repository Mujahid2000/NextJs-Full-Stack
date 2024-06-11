import connectMongoDB from '@/libs/mongodb';
import Cart from '@/models/cart';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { data, email } = await request.json();
    await connectMongoDB();
   

    const newCart = new Cart({ data, email });
    

    const savedCart = await newCart.save();
    

    return NextResponse.json({ message: 'Cart Added', cart: savedCart }, { status: 201 });
  } catch (error) {
    console.log('Error Saving Cart:', error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function GET(){
  try {
    await connectMongoDB();
    const cart = await Cart.find();
    return NextResponse.json({cart})
  } catch (error) {
    
  }
}


