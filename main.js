  var TTTApp = angular.module('TTTApp', ["firebase"]);

  TTTApp.controller('TTTController', function ($scope, $firebase) {

  $scope.remoteGameContainer =
  $firebase(new Firebase("https://itchyvsscratchy.firebaseio.com"));

    $scope.testString = "Angular sourceAppand Controller present" ;

      // this is the the an array of the boxes in the TTT board
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
        ];

    //the movecounter, winner , and game end function are all set to false at the begining of the game.
    $scope.movecounter = 0 ;
    $scope.Winner= false;
    $scope.gameEnd= false;


  //SPECIAL SAUCE HERE
      //varibales here are put inside the game container.
  $scope.gameContainer = {
    board: $scope.cellList,
    moveCounter: $scope.moveCounter,
    Winner: $scope.Winner,
    gameEnd: $scope.gameEnd
    };

  //ANGULAR STUFF HERE
    $scope.remoteGameContainer.$bind($scope, "gameContainer");

    $scope.$watch('gameContainer', function() {
      console.log('gameContainer changed!');
    });

  //FUNCTIONS START HERE ------>
    $scope.playerPicks = function(thisCell) {
      // this is the player selection funciton. if the game hasnot ended and the cell has not been
      //clicked on the movecounter will increase. a console log ,essage was created to ensure the function is running.
     if ($scope.gameContainer.gameEnd == false && thisCell.cellStatus == false){
        $scope.gameContainer.moveCounter ++;
        console.log("Cell was: " + thisCell.status);
        console.log($scope.gameContainer.moveCounter);

        // if the movecounter is odd it will be scratchy's turn
        if (($scope.gameContainer.moveCounter % 2) == 1) { 
          thisCell.status = "scratchy"; 
        } 
        //if the movecounter is even it will be itchys turn
        else {
          thisCell.status = "itchy" ; 
        } 
        console.log("Cell is now: " + thisCell.status);

        if (thisCell.cellStatus = true ) {
        console.log("cell has been clicked");
        }
        // the variable for the check winner was created here an we will be passing two arguments through it
        $scope.checkWinner($scope.gameContainer.board, thisCell.status);
        }
      };



  //the checkWinner funtion created below is a for loop that will check for wining condtions 3 boxes at a time
  $scope.checkWinner = function (cellList,xo) {
    for (var i = 0; i < 3; i++) {

        //this does the rows
        //depending on the index number of the row, it will pass a condtional to check the winning combinations of
        // all the rows
        if (cellList[i*3].status === cellList[i*3+1].status &&
        cellList[i*3+1].status === cellList[i*3+2].status &&
         cellList[i*3].status=== xo) {
            $scope.gameContainer.gameEnd = true;
            swal("winner " + xo);
            };
         

        //this will do the columns
        //depending on the index number of the column, it will pass a condtional to check the winning combinations of
        // all the columns
        if (cellList[i].status === cellList[i+3].status &&
        cellList[i+3].status === cellList[i+6].status &&
         cellList[i].status== xo) {
          $scope.gameContainer.gameEnd= true;
          swal("winner " + xo);

          }
      }

      //DIAGONAL WIN LOGIC
      //

        for (var i = 0; i < 1; i++) {
          if (cellList[i].status === cellList[i+4].status &&
            cellList[i+8].status=== cellList[i].status) {
              $scope.gameContainer.gameEnd = true;
              swal("winner " + xo);
            } 
        }


        for (var i = 0; i < 1; i++) {
          if (cellList[i+2].status === cellList[i+4].status &&
            cellList[i+2].status=== cellList[i+6].status) {
              $scope.gameContainer.gameEnd = true;
              swal("winner " + xo);
        }

      }

      //this is the tie logic, if there have been 9 moves and noone has yet hit a winning combination. it will be a a draw
      if ($scope.gameContainer.moveCounter===9 && $scope.gameContainer.gameEnd===false) { 
      $scope.gameContainer.gameEnd=true;
      swal({   
        title: "DRAW!",
        imageUrl: "images/ItchyScratchy3.gif",
        confirmButtonColor: "#F32E53",
     });
    }



 
  };


  //this is a function that is binded to the the button and till reset the board and start a new game and moves
  $scope.testJS= function() {
    $scope.gameContainer.gameEnd=false;
    $scope.gameContainer.moveCounter = 0;
      $scope.gameContainer.board= [
        {status: "0", cellStatus: false},
        {status: "1", cellStatus: false},
        {status: "2", cellStatus: false}, 
        {status: "3", cellStatus: false},   
        {status: "4", cellStatus: false}, 
        {status: "5", cellStatus: false}, 
        {status: "6", cellStatus: false}, 
        {status: "7", cellStatus: false}, 
        {status: "8", cellStatus: false}
        ];


    };
  
  });