import connectMongoDB from "@/libs/mongodb";
import Products from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(){
    try {
      await connectMongoDB();
      const products = await Products.find();
      return NextResponse.json(products, { status: 200 });
    } catch (error) {
      console.error('Error fetching products:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }