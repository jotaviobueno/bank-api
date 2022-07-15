// repository
import repository from '../../repository/finance/sendMoney-repository.js';

// utils
import validateToken from '../../../utils/validateToken-util.js';
import validateEmail from '../../../utils/validateEmail-util.js';
import getClientBalance from '../../../utils/getClientBalance-util.js';
import returnMessage from '../../../utils/returnMessage-util.js';

class sendMoney {
  async send (req, res) {
    const {token} = req.params;
    const {to, brl, password} = req.body;

    const sessionInfo = await validateToken(token);
    if (! sessionInfo)
    return await returnMessage(res, 400, 'Invalid token');
  
    const clientInfo = await validateEmail(sessionInfo.email);
    if (! clientInfo)
    return await returnMessage(res, 400, 'Invalid email');

    if (! await repository.validatePassword(password, clientInfo.password))
    return await returnMessage(res, 400, 'password invalid');

    const toInfo = await validateEmail(to);
    if (! toInfo)
    return await returnMessage(res, 400, 'to email invalid');
  
    const clientBalance = await getClientBalance(clientInfo.email);
    const toBalance = await getClientBalance(toInfo.email);

    if (! +await repository.verifyClientBalance(clientBalance, brl))
    return await returnMessage(res, 400, 'you dont have all the money');

    return res.status(200).json({
      success: {
          status: 200,
          error: false,
          info: {
            data: 'transferred value',
            transfer_id: await repository.sendMoney(clientBalance, clientInfo, toBalance, toInfo, brl),
            transfer_made_in: new Date()
        } 
      }
    });
  }
}

export default new sendMoney();