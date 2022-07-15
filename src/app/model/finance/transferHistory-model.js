import mongoose from 'mongoose';

const transfer = mongoose.model('transfer', {

    sent_by: String,
    sent_cpf: String,
    received_by: String,
    received_cpf: String,
    brl: Number,
    usd: Number,
    euro: Number,
    transfer_id: String,
    transfer_date: String,

});

export default transfer;