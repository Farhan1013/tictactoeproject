var TTTApp = angular.module('TTTApp', []);

TTTApp.controller('TTTController', function ($scope) {

  $scope.testString = "Angular source, App, and Controller present" ;

  $scope.cellList = [
  {status: "0"}, 
  {status: "1"}, 
  {status: "2"}, 
  {status: "3"}, 
  {status: "4"}, 
  {status: "5"}, 
  {status: "6"}, 
  {status: "7"}, 
  {status: "8"}
  ]  ;

  $scope.movecounter = 0 ;



  $scope.playerPicks = function(thisCell) {
    $scope.movecounter = $scope.movecounter + 1 ;
    console.log("Cell was: " + thisCell.status) ;
    if (($scope.movecounter % 2) == 1) {
      thisCell.status = "X" ;  
    } else {
      thisCell.status = "O" ;
    } 
    
  } ;



}) ;