import mongoose from 'mongoose';

const depositHistory = mongoose.model('depositHistory', {

    deposit_by: String,
    deposit_cpf: String,
    brl: Number,
    usd: Number,
    euro: Number,
    deposit_id: String,
    deposit_date: String,

});

export default depositHistory;