import clientModel from '../model/client/client-model.js';

export default async function validateEmail (email) {
    const clientInfo = await clientModel.findOne({email: email, deleted: false});
    if (clientInfo === null)
    return false;

    return true, clientInfo;
}