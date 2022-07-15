import mongoose from 'mongoose';

const login = mongoose.model('login', {
    
    email: String,
    session_token: String,
    expires_in: Date,
    login_date: Date,
    disconnected: Boolean,
});

export default login;