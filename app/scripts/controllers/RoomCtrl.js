(function() {
        function  RoomCtrl(Room, $uibModal) {
                this.roomList = Room.all;

                this.open = function() {
                        $uibModal.open({
                              templateUrl: '/templates/modal.html',
                              controller: 'ModalCtrl as modal',
                });
        }
}

        angular
                .module('blocChat')
                .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
})();
