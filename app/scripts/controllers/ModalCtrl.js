(function() {
        function ModalCtrl(Room, $uibModalInstance) {

                this.openRoom = function() {
                        Room.add(this.newRoom);
                        $uibModalInstance.close();
                }
}

        angular
                .module('blocChat')
                .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
