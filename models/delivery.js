import mongoose, { Schema } from "mongoose";

// Schema for delivery information
const deliveryInfoSchema = new Schema({
    first_name: { type: String },
    last_name: { type: String },
    phone: { type: String },
    email: { type: String },
    address: { type: String },
    date: { type: Date, },
    time: { type: String },
    area: { type: String },
    city: { type: String },
    state: { type: String },
    post_code: { type: String },
    dualCurrencyValue: { type: String },
    paypal: { type: String },
}, { _id: false });

// Schema for product information
const productSchema = new Schema({
    name: { type: String },
    description: { type: String },
    price: { type: Number, },
    category: { type: String },
    imageUrl: { type: String },
    _id: { type: String },
}, { _id: false });

// Schema for each cart item
const cartItemSchema = new Schema({
    _id: { type: String },
    data: { type: productSchema, },
    email: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    __v: { type: Number, select: false }
}, { _id: false });

// Schema for the overall cart structure
const cartSchema = new Schema({
    cart: { type: [cartItemSchema], }
}, { versionKey: false });

// Schema for delivery data
const deliveryDataSchema = new Schema({
    deliveryInfo: { type: deliveryInfoSchema, },
    products: { type: [productSchema], }, // Array of productSchema
    userEmail: { type: String }
}, { 
    versionKey: false // Disable the __v field
});

const DeliveryInfo = mongoose.models.DeliveryInfo || mongoose.model("DeliveryInfo", deliveryDataSchema);

export default DeliveryInfo;
