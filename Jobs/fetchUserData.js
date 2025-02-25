import User from '../models/user.model.js';


export const fetchUserData = () => {
    return User.findOne().then(user => {
      if (!user) {
        const newUser = new User({ counter: 0, prizes: 0 });
        return newUser.save().then(() => ({ counter: 0, prizes: 0 }));
      }
      return { counter: user.counter, prizes: user.prizes };
    });
  };