import depositHistoric from '../../../../model/finance/depositHistory-model.js';

class repository {

    async returnHistoric (email) {
        return await depositHistoric.find({deposit_by: email}).select({_id: 0, __v: 0});
    }
}

export default new repository();