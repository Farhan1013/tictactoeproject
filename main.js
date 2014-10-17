var TTTApp = angular.module('TTTApp', []);

TTTApp.controller('TTTController', function ($scope) {

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
      ]  ;


  $scope.movecounter = 0 ; //the move counter is set to 0 at the start of the game 

  $scope.gameEnd= false; //we are setting this variable to false because the game has just begun and nobody has yet won
                          //when there is a winner the value will then be true.
  $scope.xWinner= false;
  $scope.oWinner= false;

  // $scope.winningSets = [

  //   [0,1,2]
  //   [3,4,5]
  //   [6,7,8]
  //   [2,5,8]
  //   [1,4,7]
  //   [0,3,6]
  //   [2,4,6]
  //   [0,4,8]];

  $scope.gameEnd = function() {

  }

  $scope.playerPicks = function(thisCell) {
    if (thisCell.status == "X"  || thisCell.status == "O") {
      return;
    }
    $scope.movecounter ++;
    console.log("Cell was: " + thisCell.status);
    console.log($scope.movecounter);
    if (($scope.movecounter % 2) == 1) { //this is saying if movecounter is oddit is player X
      thisCell.status = "X" ;  
    } else {
      thisCell.status = "O" ; // else it is player O if movecounter is even
    } 
    console.log("Cell is now: " + thisCell.status);


    $scope.checkWinner($scope.cellList, "X");
        $scope.checkWinner($scope.cellList, "O");
  };


$scope.checkWinner = function (cellList,xo) {
  for (var i = 0; i < 3; i++) {

    // $scope.xCount = 0;
    // $scope.oCount = 0;

     // for ( var j = 0; j < 3; j++) {
      //this does the rows
      if (cellList[i*3].status === cellList[i*3+1].status &&
      cellList[i*3+1].status === cellList[i*3+2].status &&
       cellList[i*3].status=== xo) {
        console.log("winner");
        if (xo == "X") 
          $scope.xWinner = true; 
           
        else
          $scope.oWinner = true;
      } 
      //this will do the columns
      if (cellList[i].status === cellList[i+3].status &&
      cellList[i+3].status === cellList[i+6].status &&
       cellList[i].status== xo) {
       if (xo == "X") 
          $scope.xWinner = true;
        else
          $scope.oWinner = true;
      }
  }
    if ($scope.movecounter===9 && $scope.gameEnd===false) { //conditional to check the number if the number of  moves in the game 
                                                        //if it is equal to 9 and  the game has not ended
                                                        //the game will then be ended as a tie
    $scope.gameEnd=true;
    window.alert("tie game");


}
};

$scope.testJS= function() {
  // $scope.gameEnd=false;
  $scope.cellList = [
    {num: 1},
    {num: 2},
    {num: 3},
    {num: 4},
    {num: 5},
    {num: 6},
    {num: 7},
    {num: 8},
    {num: 9}
  ];
};


});