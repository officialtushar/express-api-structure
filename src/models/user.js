import mongoose from '../db/mongo';

const userSchema = new mongoose.Schema({
    username: {
        type: String
    }
});


const User = mongoose.model('Users', userSchema);

export default User;


