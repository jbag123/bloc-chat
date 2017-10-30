(function() {
                function ModalCtrl(Room, $uibModalInstance) {

                        // add room entered in view back into Room service and close modal
                        this.addRoom = function() {
                                Room.add(this.newRoom);
                                $uibModalInstance.close();
                        };

                }

        angular
                .module('blocChat')
                .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
