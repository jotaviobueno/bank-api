import clientModel from '../../../model/client/client-model.js';
import balanceModel from '../../../model/finance/balance-model.js';

import bcrypt from 'bcrypt';

class repository {
    
    async existEmail (email) {
      if (await clientModel.findOne({email: email, deleted: false}) === null)
      return true;

      return false;
    }

    async existCpf (cpf) {
      if (await clientModel.findOne({cpf: cpf, deleted: false}) === null)
      return true;

      return false;
    }

    async createBalanceAccount (email, cpf) {
      await balanceModel.create({
        email: email,
        cpf: cpf,
        brl: 0,
        usd: 0,
        euro: 0
      });
    }

    async storageClient (full_name, email, password, cpf) {
      await clientModel.create({
          full_name: full_name,
          email: email,
          password: await bcrypt.hash(password, 10),
          cpf: cpf,
          its_admin: false,
          created_in: new Date(),
          last_update: null,
          deleted: false,
      });
    }
}

export default new repository();