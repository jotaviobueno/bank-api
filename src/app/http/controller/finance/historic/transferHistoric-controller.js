//repository
import repository from '../../../repository/finance/historic/transferHistoric-repository.js';

//utils
import validateToken from '../../../../utils/validateToken-util.js';
import validateEmail from '../../../../utils/validateEmail-util.js';
import returnMessage from '../../../../utils/returnMessage-util.js';

class TransferHistoric {
    async historic (req, res) {
        const {token} = req.params;

        const sessionInfo = await validateToken(token);
        if (! sessionInfo)
        return await returnMessage(res, 400, 'Invalid token');
    
        const clientInfo = await validateEmail(sessionInfo.email);
        if (! clientInfo)
        return await returnMessage(res, 400, 'Invalid email');

        return res.status(200).json({
            success: {
                status: 200,
                error: false,
                info: {
                  sent: await repository.returnHistoricP1(clientInfo.email),
                  received: await repository.returnHistoricP2(clientInfo.email)
            } 
          }
        });
    }
}

export default new TransferHistoric();