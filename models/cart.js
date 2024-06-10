import mongoose, { Schema } from 'mongoose';

const dataSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

const cartSchema = new Schema(
  {
    data: dataSchema, // Use the data schema here
    email: { type: String, required: true }
  },
  {
    timestamps: true // Correct the key here
  }
);

const Cart = mongoose.models.Cart || mongoose.model('Cart', cartSchema);

export default Cart;
