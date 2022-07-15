import loginModel from '../model/client/login-model.js';

export default async function validateSession (token) {
    const session = await loginModel.findOne({session_token: token, disconnected: false});
    if (session === null)
    return false;

    return true, session;
}