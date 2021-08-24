import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    address: { type: String, required: true },
    obs: { type: String, required: false },
    phone: { type: Number, length: 10, required: true },
    department: { type: String, required: true },
    city: { type: String, required: true }
},{
    timestamps: true
})

const Address = mongoose.model("Address",addressSchema);

export default Address