(function() {
          function Message($firebaseArray) {
                    var Message = {};
                    var ref = firebase.database().ref().child("messages");
                    var messages = $firebaseArray(ref);

                    Message.getRoomId = function(roomId) {
                        //     messages.orderByChild("roomId").equalTo(roomId);
                        var orderedMessage = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
                        return orderedMessage;
                    }

                    return Message;
          }

          angular
                    .module('blocChat')
                    .factory('Message', ['$firebaseArray', Message]);
})();
