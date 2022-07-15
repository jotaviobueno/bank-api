import repository from '../../repository/client/register-repository.js';
import returnMessage from '../../../utils/returnMessage-util.js';

class clientStorage {
  async storage (req, res) {
    const {full_name, email, password, cpf} = req.body;

    if (! await repository.existEmail(email))
    return await returnMessage(res, 400, 'Invalid email');

    if (! await repository.existCpf(cpf))
    return await returnMessage(res, 400, 'Invalid cpf');

    await repository.createBalanceAccount(email, cpf);

    await repository.storageClient(full_name, email, password, cpf);
    return await returnMessage(res, 200, "account created");
    
  }
}

export default new clientStorage();