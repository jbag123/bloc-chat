(function() {
  function UserCtrl('$firebaseAuth', '$uibModal') {
      var auth = $firebaseAuth;

      this.signIn = function() {
        this.fireBaseUser = null;
        this.error = null;

        auth.authWithOAuthPopup("google").then(function(authData) {
          console.log("Logged in as:", authData.uid);
        }).catch(function(error)) {
          console.error("Authentication failed:", error);
        }
      }
  }
  angular
    .module('blocChat')
    .controller('UserCtrl', ['$firebaseAuth', '$uibModal'])
})();
