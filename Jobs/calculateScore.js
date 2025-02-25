import User from '../models/user.model.js';


export const calculateScore = () => {
    return User.findOne().then(user => {
      let counter = user.counter + 1;
      let message = 'You clicked the button!';
      
      if (Math.random() < 0.5) {
        counter += 10;
        message = 'Bonus! You gained 10 points!';
      }
      if (Math.random() < 0.25) {
        user.prizes += 1;
        message = 'Congratulations! You won a prize!';
      }
      
      user.counter = counter;
      return user.save().then(() => ({ counter, prizes: user.prizes, message }));
    });
  };
  