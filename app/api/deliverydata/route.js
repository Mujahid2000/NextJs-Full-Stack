import connectMongoDB from "@/libs/mongodb";
import DeliveryInfo from "@/models/delivery";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
      const { deliveryInfo, products, userEmail } = await request.json();
      
      
  
      await connectMongoDB();
  
      const newDeliveryData = new DeliveryInfo({ deliveryInfo, products, userEmail });
    //   console.log('Data to be saved:', newDeliveryData);
      const saveDeliveryData = await newDeliveryData.save();
    //   console.log('Saved data:', saveDeliveryData);
  
      return NextResponse.json({ message: 'data save success', saveDeliveryData }, { status: 201 });
    } catch (error) {
      console.error('Error saving data:', error); // Add detailed error logging
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
