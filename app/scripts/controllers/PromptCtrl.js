(function() {
  function PromptCtrl($uibModalInstance, $cookies){
              this.addUser = function () {
                        $cookies.put('blocChatCurrentUser', this.username);
                        $uibModalInstance.close();
              };

      }

                angular
                      .module('blocChat')
                      .controller('PromptCtrl', ['$uibModalInstance', '$cookies', PromptCtrl]);
})();
