import depositHistory from '../../../model/finance/depositHistory-model.js';
import balanceModel from '../../../model/finance/balance-model.js';

import { v4 as uuidv4 } from 'uuid';

class repository {

    async deposit (accountBalance, clientInfo, value) {
      const transfer_id = uuidv4();
      const some = parseFloat(accountBalance.brl) + parseFloat(value);
      
      await balanceModel.findOneAndUpdate({email: clientInfo.email}, {brl: some});

      await depositHistory.create({
          deposit_by: clientInfo.email,
          deposit_cpf: clientInfo.cpf,
          brl: value,
          usd: 0,
          euro: 0,
          deposit_id: transfer_id,
          deposit_date: new Date(),
      });
      return transfer_id;
    }
}

export default new repository();