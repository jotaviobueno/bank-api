import balanceModel from '../../../model/finance/balance-model.js';
import transferHistoryModel from '../../../model/finance/transferHistory-model.js';

import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

class repository {
    async validatePassword (password, hash) {
        return await bcrypt.compare(password, hash);
    }

    async verifyClientBalance (clientBalance, value) {
        if (value > clientBalance.brl)
        return false;

        return true;
    }

    async sendMoney (clientBalance, clientInfo, toBalance, toInfo, value) {
     const transfer_id = uuidv4();
     const sub = parseFloat(clientBalance.brl) - parseFloat(value);
     const sum = parseFloat(toBalance.brl) + parseFloat(value);

     await balanceModel.findOneAndUpdate({email: clientInfo.email}, {brl: sub});
     await balanceModel.findOneAndUpdate({email: toInfo.email}, {brl: sum});

     await transferHistoryModel.create({
         sent_by: clientInfo.email,
         sent_cpf: clientInfo.cpf,
         received_by: toInfo.email,
         received_cpf: toInfo.cpf,
         brl: value,
         usd: 0,
         euro: 0,
         transfer_id: transfer_id,
         transfer_date: new Date(),
     });
     return transfer_id;
    }
}

export default new repository();