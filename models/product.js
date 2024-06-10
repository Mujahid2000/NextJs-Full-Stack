import mongoose, { Schema } from 'mongoose';

const dataSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true }
  }
);


const Products = mongoose.models.Products || mongoose.model('Products', dataSchema);

export default Products;
