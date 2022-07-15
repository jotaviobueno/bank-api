import mongoose from 'mongoose';

const client = mongoose.model('client', {

    full_name: String,
    email: String,
    password: String,
    cpf: String,
    its_admin: Boolean,
    created_in: Date,
    last_update: Date,
    deleted: Boolean,
});

export default client;