(function() {
        function  RoomCtrl(Room, Message, $uibModal) {

                // store all rooms from Room service
                this.roomList = Room.all;

                // open modal method
                this.open = function() {
                        $uibModal.open({
                                templateUrl: '/templates/modal.html',
                                controller: 'ModalCtrl as modal'
                        });
                };

                // store room and message information entered into view
                this.storeRooms = function(room) {
                        this.currentRoom = room;
                        // use roomId method to get room object id
                        this.currentMessages = Message.getRoomId(room.$id);
                }

                // pass in message and current room info to send mesage back to room service
                this.sendMessage = function() {
                        Message.send(this.newMessage, this.currentRoom.$id);
                };

                // pass in username to send back to room service and find username
                this.findUser = function(username) {
                        Message.find(username); 
                }

        }
        angular
                .module('blocChat')
                .controller('RoomCtrl', ['Room', 'Message', '$uibModal', RoomCtrl]);
})();
