'use strict';
var app = angular.module('confusionApp', ['ui.bootstrap']);
app.controller('MenuController', MenuController);
MenuController.$inject = ['$scope', '$uibModal', 'team'];

function MenuController($scope, $uibModal, team) {
    $scope.tab = 1;
    $scope.filtText = 'clinical';
    $scope.showDetails = true;
    $scope.assoFilt = 'Akash';
    $scope.team = team;
    $scope.hours;
    $scope.selectAsso = function (name) {
        $scope.assoFilt = name;
        // console.log($scope.assoFilt);
    };
    $scope.assoSelected = function () {
        console.log($scope.assoFilt)
        return $scope.assoFilt;
    };
    $scope.select = function (setTab) {
        $scope.tab = setTab;
        if (setTab === 2) {
            $scope.filtText = "financial";
        }
        else if (setTab === 3) {
            $scope.filtText = "data";
        }
        else if (setTab === 4) {
            $scope.filtText = "bridge";
        }
        else {
            $scope.filtText = "clinical";
        }
    };
    $scope.isSelected = function (checkTab) {
        return ($scope.tab === checkTab);
    };
    $scope.toggleDetails = function () {
        $scope.showDetails = !$scope.showDetails;
    };
    $scope.getAvail = function (hours) {
        return ((Number($scope.hours) / 40) * 100)
    };
    $scope.openModal = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'myModalContent.html'
            , controller: 'AssignController'
            , size: 'md'
        });
        modalInstance.result.then(function (selectedItem) {
            $ctrl.selected = selectedItem;
        }, function (error) {
            console.info('Modal dismissed at: ' + new Date() + error);
        });
    };
    $scope.aboutMeModal = function (name) {
        //console.log(name);
        var arr = $scope.team.filter(function (item) {
            if (item.name === name) return true;
        });
        console.log(arr);
        var modalInstance = $uibModal.open({
            templateUrl: 'aboutMeModal.html'
            , controller: 'AboutMeController'
            , size: 'md'
            , resolve: {
                obj: function () {
                    return arr[0];
                }
            }
        });
    };
}
app.controller('AboutMeController', AboutMeController);
app.controller('AssignController', AssignController);
AboutMeController.$inject = ['$scope', '$uibModalInstance', 'obj'];
AssignController.$inject = [];

function AboutMeController($scope, $uibModalInstance, obj) {
    $scope.asso1 = obj;
    $scope.cancel = function () {
        console.log("Saras");
        $uibModalInstance.dismiss('cancel');
    }
}

function AssignController() {}