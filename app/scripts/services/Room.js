(function() {
        function Room($firebaseArray) {
                //define an empty to hold rooms
                var Room = {};
                // create a reference to the firebase db and a property called rooms
                var ref = firebase.database().ref().child("rooms");
                // create that reference as an array
                var rooms = $firebaseArray(ref);

                // create the Room object as all rooms in the array
                Room.all = rooms;

                // create an add method to add created rooms back into db
                Room.add = function(room) {
                        rooms.$add(room);
                };

                return Room;
        }

        angular
                .module('blocChat')
                .factory('Room', ['$firebaseArray', Room]);
})();
