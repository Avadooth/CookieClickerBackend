// Here are the project parameters
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  counter: {
    type: Number,
    default: 0,
  },
  prizes: {
    type: Number,
    default: 0,
  }
});

const User = mongoose.model('User', userSchema);
export default User;
