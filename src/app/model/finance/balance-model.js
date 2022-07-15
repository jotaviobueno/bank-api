import mongoose from 'mongoose';

const balance = mongoose.model('balance', {

    email: String,
    cpf: String,
    brl: Number,
    usd: Number,
    euro: Number
});

export default balance;