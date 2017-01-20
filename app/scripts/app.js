'use strict';
var app = angular.module('confusionApp', ['ui.bootstrap', 'ngCookies']);
app.controller('MenuController', MenuController);
MenuController.$inject = ['$scope', '$uibModal', '$cookies', 'team'];

function MenuController($scope, $uibModal, $cookies, team) {
    $scope.tab = 1;
    $scope.filtText = 'clinical';
    $scope.showDetails = true;
    $scope.assoFilt = 'Akash';
    $scope.team = team;
    //    $cookies.putObject('karan', $scope.team[0]);
    //    $cookies.putObject('akash', $scope.team[1]);
    //    $cookies.putObject('neha', $scope.team[2]);
    //    $scope.team[0] = $cookies.getObject('karan');
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
    $scope.openModal = function (name) {
        console.log(name);
        var modalInstance = $uibModal.open({
            templateUrl: 'myModalContent.html'
            , controller: 'AssignController'
            , size: 'md'
        });
        modalInstance.result.then(function (selectedItem) {
            console.log(selectedItem);
            if (selectedItem !== undefined) {
                let objindex = 0;
                var arr = $scope.team.filter(function (item, index) {
                    if (item.name === name) {
                        objindex = index;
                        return true;
                    }
                });
                console.log(objindex);
                $scope.team[objindex].nextWeeksAvail = selectedItem.week;
                $scope.team[objindex].quartersAvail = selectedItem.quarter;
                //                $cookies.putObject('karan', $scope.team[objindex]);
                //                console.log($cookies.getObject('karan'));
            }
            else {
                console.log("Just a cancel");
            }
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
AssignController.$inject = ['$scope', '$uibModalInstance'];

function AboutMeController($scope, $uibModalInstance, obj) {
    $scope.asso1 = obj;
    $scope.cancel = function () {
        $uibModalInstance.close('cancel');
    }
}

function AssignController($scope, $uibModalInstance) {
    console.log("Saras");
    $scope.proceed = false;
    $scope.confirmPass = function () {
        if ("karan" === $scope.password) {
            $scope.proceed = true;
        }
        else {
            $scope.proceed = false;
        }
    }
    $scope.done = function () {
        console.log($scope.weekAvail);
        console.log($scope.quarterAvail);
        var object = {
            week: $scope.weekAvail
            , quarter: $scope.quarterAvail
        };
        $uibModalInstance.close(object);
    };
    $scope.cancel = function () {
        $uibModalInstance.close();
    }
}