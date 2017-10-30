(function() {
                function PromptCtrl($uibModalInstance, $cookies){

                        // add username entered in view back into Room service and close modal
                        this.addUser = function () {
                                $cookies.put('blocChatCurrentUser', this.username);
                                $uibModalInstance.close();
                        };

      }

                angular
                      .module('blocChat')
                      .controller('PromptCtrl', ['$uibModalInstance', '$cookies', PromptCtrl]);
})();
