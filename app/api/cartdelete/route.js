import connectMongoDB from "@/libs/mongodb";
import Cart from "@/models/cart";
import { NextResponse } from "next/server";


export async function DELETE(){
    try {
      await connectMongoDB();
      const cart = await Cart.deleteMany();
      return NextResponse.json({cart})
    } catch (error) {
      console.log(error);
    }
  }
  
  