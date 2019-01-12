
    function checkUsersValid(goodUsers) {
        return function allUsersValid(submittedUsers) {
          return submittedUsers.every(function abc(user) {
            return goodUsers.some(function def(chk) {
              return user.id==chk.id;
            });
          });
        };
      }
  
      module.exports = checkUsersValid