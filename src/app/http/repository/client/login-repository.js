import loginModel from '../../../model/client/login-model.js';
import clientModel from '../../../model/client/client-model.js';

import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

class repository {

  async existEmail (email) {
    if (await clientModel.findOne({email: email, deleted: false}) === null)
    return false;

    return true;
  }
 
  async verifyPassword (email, password) {
    const findClient = await clientModel.findOne({email: email, deleted: false});
    
    return await bcrypt.compare(password, findClient.password);
  }

  async createSession (email) {
    const token = uuidv4();
    await loginModel.create({
      email: email,
      session_token: token,
      expires_in: new Date().setHours(new Date().getHours() + 6),
      login_date: new Date(),
      disconnected: false,
    });
    return token;
  }
}

export default new repository();