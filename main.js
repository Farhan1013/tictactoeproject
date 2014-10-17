var TTTApp = angular.module('TTTApp', ["firbase"]);

TTTApp.controller('TTTController', function ($scope) {

  $scope.remoteGameContainer =
  $firebase(new Firebase("https://itchyvsscratchy.firebaseio.com/"))

  $scope.testString = "Angular sourceAppand Controller present" ;

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
      ];




  $scope.movecounter = 0; 
  $scope.gameEnd= false;                     
  $scope.xWinner= false;
  $scope.oWinner= false;


  //SPECIAL SAUCE HERE
  $scope.gameContainer = {
    gameContainerArray: $scope.gameContainer,
    moveCount: $scope.movecounter
  };

  //ANGULAR STUFF HERE
  $scope.remoteGameContainer.$blind($scope, "gameContainer");

  $scope.$watch('gameContainer', function() {
    console.log('gameContainer changed!');
  });

  //FUNCTIONS START HERE ------>

  $scope.playerPicks = function(thisCell) {
    if (thisCell.status == 'X' && thisCell.status == 'O') {
      return;
    $scope.gameContainer.moveCount ++; 
    console.log("Cell was: " + thisCell.status);
  }
    if (($scope.movecounter % 2) == 0) {
      thisCell.status = "X" ;  
    } else {
      thisCell.status = "O" ; 
    } 
    $scope.movecounter++;
    console.log("Cell is now: " + thisCell.status);

    $scope.checkWinner($scope.gameContainer, "X");
        $scope.checkWinner($scope.gameContainer, "O");
  };


$scope.checkWinner = function (list,xo) {
  for (var i = 0; i < 3; i++) {
      //this will do the rows
      if (list[i*3].status === list[i*3+1].status &&
      list[i*3+1].status === list[i*3+2].status &&
       list[i*3].status=== xo) {
        console.log("winner");
        if (xo == "X") 
          $scope.xWinner = true;
        else
          $scope.oWinner = true;
      } 
      //this will do the columns
      if (list[i].status === list[i+3].status &&
      list[i+3].status === list[i+6].status &&
       list[i].status== xo) {
       if (xo == "X") 
          $scope.xWinner = true;
        else
          $scope.oWinner = true;
      }
  }
    if ($scope.movecounter===9 && $scope.gameEnd===false) {
    $scope.gameEnd=true;
    window.alert("tie game");
}
};

$scope.testJS= function() {
  // $scope.gameEnd=false;
  $scope.gameContainer = [
    {status: "0"}, 
    {status: "1"}, 
    {status: "2"}, 
    {status: "3"}, 
    {status: "4"}, 
    {status: "5"}, 
    {status: "6"}, 
    {status: "7"}, 
    {status: "8"}
      ];
};


});