//repository
import repository from '../../repository/finance/deposit-repository.js';

//utils
import validateToken from '../../../utils/validateToken-util.js';
import validateEmail from '../../../utils/validateEmail-util.js';
import getClientBalance from '../../../utils/getClientBalance-util.js';
import returnMessage from '../../../utils/returnMessage-util.js';

class deposit {
  async deposit (req, res) {
    const {token} = req.params;
    const {brl} = req.body;

    const sessionInfo = await validateToken(token);
    if (! sessionInfo)
    return await returnMessage(res, 400, 'Invalid token');

    const clientInfo = await validateEmail(sessionInfo.email);
    if (! clientInfo)
    return await returnMessage(res, 400, 'Invalid email');

    const clientBalance = await getClientBalance(clientInfo.email);

    if (brl <= 0)
    return

    return res.status(200).json({
        success: {
            status: 200,
            error: false,
            info: {
              transfer_id: await repository.deposit(clientBalance, clientInfo, brl)
          } 
        }
    });
  }
}

export default new deposit();