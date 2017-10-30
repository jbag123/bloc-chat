(function() {
                function BlocChatCookies($cookies, $uibModal) {
                        // store the username cookie
                        var currentUser = $cookies.get('blocChatCurrentUser');
                                // if username is not set open modal with no keyboard or screen exit
                                if (!currentUser || currentUser === '') {
                                        $uibModal.open({
                                                templateUrl: 'templates/prompt.html',
                                                controller: 'PromptCtrl as prompt',
                                                keyboard: false,
                                                backdrop: 'static'
                                        });
                                };
                        }

        angular
                .module('blocChat')
                .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
