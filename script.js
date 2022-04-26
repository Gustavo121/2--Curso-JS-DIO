const EventEmitter = require('events');

class Users extends EventEmitter {
  userLogged(data) {
    this.emit('User logged', data);
  }
}

const users = new Users();

users.once('Use logged', data => {  // once - aparece apenas o primeiro
  console.log(data);                // on - aparece os dois
});

users.userLogged({ user: 'Gustavo Gouvêa '});
users.userLogged({ user: 'Marisa Gouvêa '});