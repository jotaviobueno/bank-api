import repository from '../../repository/client/login-repository.js';
import returnMessage from '../../../utils/returnMessage-util.js';

class clientLogin {
  async login (req, res) {
    const {email, password} = req.body;

    if (! await repository.existEmail(email))
    return await returnMessage(res, 400, 'Invalid email');

    if (! await repository.verifyPassword(email, password))
    return await returnMessage(res, 400, 'Invalid password');

    return res.status(200).json({
      success: {
          status: 200,
          error: false,
          info: {
            data: await repository.createSession(email)
        } 
      }
    });
  }
}

export default new clientLogin();