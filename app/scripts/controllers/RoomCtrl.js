(function() {
        function  RoomCtrl(Room, $uibModal) {
                this.roomList = Room.all;
                
                this.open = function() {
                        $uibModal.open({
                              templateUrl: '/templates/modal.html',
                              controller: 'ModalCtrl as modal'
                       });
               };

                this.setCurrentRoom = function(room) {
                        //currentRoom = room;
                        console.log(room.$value);
                }
        }

        angular
                .module('blocChat')
                .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
})();
