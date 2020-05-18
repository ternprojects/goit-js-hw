'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const object = function () {
  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = 'false';

  const userKeys = Object.keys(user);

  for (const allKeys of userKeys) {
    console.log(`${allKeys}: "${user[allKeys]}"`);
  }
  
};

object();