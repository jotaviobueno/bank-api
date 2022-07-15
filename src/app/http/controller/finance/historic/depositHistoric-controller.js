//repository
import repository from '../../../repository/finance/historic/depositHistoric-repository.js'

//utils
import validateToken from '../../../../utils/validateToken-util.js';
import validateEmail from '../../../../utils/validateEmail-util.js';
import returnMessage from '../../../../utils/returnMessage-util.js';

class depositHistoric {
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
                  data: await repository.returnHistoric(clientInfo.email)
            } 
          }
        });
    }
}

export default new depositHistoric();