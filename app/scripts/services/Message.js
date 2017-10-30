(function() {
        function Message($firebaseArray, $cookies) {
                //define an empty to hold message
                var Message = {};
                // create a reference to the firebase db and a property called messages
                var ref = firebase.database().ref().child("messages");
                // create that reference as an array
                var messages = $firebaseArray(ref);

                // filter the rooms to match a passed in roomId
                Message.getRoomId = function(roomId) {
                        var orderedMessage = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
                        return orderedMessage;
                };

                // create an add method to add created message back into db
                Message.send = function(newMessage, roomId) {
                        var userName = $cookies.get('blocChatCurrentUser');
                        var obj = {
                                content: newMessage,
                                username: userName,
                                roomId: roomId
                        }
                        messages.$add(obj);
                }

            return Message;
        }

        angular
            .module('blocChat')
            .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
