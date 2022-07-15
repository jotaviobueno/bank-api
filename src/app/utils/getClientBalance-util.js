import balanceModel from '../model/finance/balance-model.js';

export default async function getClientBalance (email) {
    return await balanceModel.findOne({email: email});
}