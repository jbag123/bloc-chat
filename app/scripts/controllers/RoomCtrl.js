(function() {
        function  RoomCtrl(Room, Message, $uibModal) {
                this.roomList = Room.all;

                this.open = function() {
                        $uibModal.open({
                              templateUrl: '/templates/modal.html',
                              controller: 'ModalCtrl as modal'
                       });
               };

                this.storeRooms = function(room) {
                        this.currentRoom = room;
                        this.currentMessages = Message.getRoomId(room.$id);
                }

        }
        angular
                .module('blocChat')
                .controller('RoomCtrl', ['Room', 'Message', '$uibModal', RoomCtrl]);
})();
