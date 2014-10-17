  var TTTApp = angular.module('TTTApp', []);

  TTTApp.controller('TTTController', function ($scope) {

    $scope.testString = "Angular sourceAppand Controller present" ;

      $scope.cellList = [
        {status: "0", cellStatus: false},
        {status: "1", cellStatus: false},
        {status: "2", cellStatus: false}, 
        {status: "3", cellStatus: false}, 
        {status: "4", cellStatus: false}, 
        {status: "5", cellStatus: false}, 
        {status: "6", cellStatus: false}, 
        {status: "7", cellStatus: false}, 
        {status: "8", cellStatus: false}
        ]  ;


    $scope.movecounter = 0 ;
    $scope.xWinner= false;
    $scope.oWinner= false;
    $scope.gameEnd= false;



    $scope.playerPicks = function(thisCell) {

     if ($scope.gameEnd == false && thisCell.cellStatus == false){
        $scope.movecounter ++;
        console.log("Cell was: " + thisCell.status);
        console.log($scope.movecounter);
        
        if (($scope.movecounter % 2) == 1) { 
          thisCell.status = "X";  
        } 
        else {
          thisCell.status = "O" ; 
        } 
        console.log("Cell is now: " + thisCell.status);

        if (thisCell.cellStatus == true ) {
        console.log("cell has been clicked");
        return;
      }



        $scope.checkWinner($scope.cellList, thisCell.status);
        // $scope.checkWinner($scope.cellList, "O");
      }
    };


  $scope.checkWinner = function (cellList,xo) {
    for (var i = 0; i < 3; i++) {

        //this does the rows
        if (cellList[i*3].status === cellList[i*3+1].status &&
        cellList[i*3+1].status === cellList[i*3+2].status &&
         cellList[i*3].status=== xo) {
            $scope.gameEnd = true;
            window.alert("winner player " + xo);
            };
         

        //this will do the columns
        if (cellList[i].status === cellList[i+3].status &&
        cellList[i+3].status === cellList[i+6].status &&
         cellList[i].status== xo) {
          $scope.gameEnd= true;
          window.alert("winner player " + xo)

          }
      }

        for (var i = 0; i < 1; i++) {
          if (cellList[i].status === cellList[i+4].status &&
            cellList[i+8].status== cellList[i].status) {
            window.alert("winner");
            if (xo == "X") {
              $scope.xWinner = true;
              $scope.gameEnd = true;
              window.alert("winner player 1");
            } 
            else {
              $scope.oWinner = true;
              $scope.gameEnd= true;
              window.alert("winner player 2");

            }
          } 
        }


      if ($scope.movecounter===9 && $scope.gameEnd===false) { 
      $scope.gameEnd=true;
      window.alert("tie game");
    }


  };



  $scope.testJS= function() {
    // $scope.gameEnd=false;
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

    };
  
  });