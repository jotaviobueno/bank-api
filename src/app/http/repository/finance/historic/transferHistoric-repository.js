import transferHistoric from '../../../../model/finance/transferHistory-model.js';

class repository {

    async returnHistoricP1 (email) {
        return await transferHistoric.find({sent_by: email}).select({_id: 0, __v: 0});
    }

    async returnHistoricP2 (email) {
        return await transferHistoric.find({received_by: email}).select({_id: 0, __v: 0});
    }
}

export default new repository();