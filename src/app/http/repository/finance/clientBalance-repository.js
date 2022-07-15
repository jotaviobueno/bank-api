import balanceModel from '../../../model/finance/balance-model.js';

class repository {

    async returnClientBalance (email) {
        return await balanceModel.findOne({email: email}).select({_id: 0, email: 0, cpf: 0, __v: 0});
    }
}

export default new repository(); 