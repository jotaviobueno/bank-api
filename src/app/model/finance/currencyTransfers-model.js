import mongoose from 'mongoose';

const currencyTransfer = mongoose.model('currencyTransfer', {

    buy_by: String,
    buy_cpf: String,
    soldOrBought: String,
    in: String,
    to: String,
    value: {
        brl: Number,
        usd: Number,
        euro: Number,
    },
    transfer_id: String,
    transfer_date: String,

});

export default currencyTransfer;