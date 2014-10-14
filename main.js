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
    if(thisCell.status != "X" && thisCell.status != "O") {
    $scope.movecounter = $scope.movecounter + 1 ;
    if (typeof thisCell.status == "number");
    console.log("Cell was: " + thisCell.status) ;
    if (($scope.movecounter % 2) == 1) {
      thisCell.status = "X" ;  
    } else {
      thisCell.status = "O" ;
    } 

  console.log("Cell is now: " + thisCell.status);

//win logic for X
      if($scope.cellList[0].status == "X" &&
        $scope.cellList[1].status == "X" &&
        $scope.cellList[2].status == "X") {
        window.alert("player win!");
  }
    
    if($scope.cellList[3].status == "X" &&
        $scope.cellList[4].status == "X" &&
        $scope.cellList[5].status == "X") {
        window.alert("player 1 win!");
    }

  if($scope.cellList[3].status == "X" &&
        $scope.cellList[4].status == "X" &&
        $scope.cellList[5].status == "X") {
        window.alert("player 1 win!");
    }

    if($scope.cellList[6].status == "X" &&
        $scope.cellList[7].status == "X" &&
        $scope.cellList[8].status == "X") {
        window.alert("player 1 win!");
    }

        if($scope.cellList[6].status == "X" &&
        $scope.cellList[7].status == "X" &&
        $scope.cellList[8].status == "X") {
        window.alert("player 1 win!");
    }

        if($scope.cellList[2].status == "X" &&
        $scope.cellList[5].status == "X" &&
        $scope.cellList[8].status == "X") {
        window.alert("player 1 win!");
    }

        if($scope.cellList[1].status == "X" &&
        $scope.cellList[4].status == "X" &&
        $scope.cellList[7].status == "X") {
        window.alert("player 1 win!");
    }

        if($scope.cellList[0].status == "X" &&
        $scope.cellList[3].status == "X" &&
        $scope.cellList[6].status == "X") {
        window.alert("player 1 win!");
    }

        if($scope.cellList[0].status == "X" &&
        $scope.cellList[4].status == "X" &&
        $scope.cellList[8].status == "X") {
        window.alert("player 1 win!");
    }

    if($scope.cellList[2].status == "X" &&
        $scope.cellList[4].status == "X" &&
        $scope.cellList[6].status == "X") {
        window.alert("player 1 win!");
    }
//below id logic if O wins
    if($scope.cellList[0].status == "O" &&
        $scope.cellList[1].status == "O" &&
        $scope.cellList[2].status == "O") {
        window.alert("player 2 win!");
  }
    
    if($scope.cellList[3].status == "O" &&
        $scope.cellList[4].status == "O" &&
        $scope.cellList[5].status == "O") {
        window.alert("player 2 win!");
    }

  if($scope.cellList[3].status == "O" &&
        $scope.cellList[4].status == "O" &&
        $scope.cellList[5].status == "O") {
        window.alert("player 2 win!");
    }

    if($scope.cellList[6].status == "O" &&
        $scope.cellList[7].status == "O" &&
        $scope.cellList[8].status == "O") {
        window.alert("player 2 win!");
    }

        if($scope.cellList[6].status == "O" &&
        $scope.cellList[7].status == "O" &&
        $scope.cellList[8].status == "O") {
        window.alert("player2  win!");
    }

        if($scope.cellList[2].status == "O" &&
        $scope.cellList[5].status == "O" &&
        $scope.cellList[8].status == "O") {
        window.alert("player 2 win!");
    }

        if($scope.cellList[1].status == "O" &&
        $scope.cellList[4].status == "O" &&
        $scope.cellList[7].status == "O") {
        window.alert("player 2 win!");
    }

        if($scope.cellList[0].status == "O" &&
        $scope.cellList[3].status == "O" &&
        $scope.cellList[6].status == "O") {
        window.alert("player 2 wins!");
    }
        if($scope.cellList[0].status == "O" &&
        $scope.cellList[4].status == "O" &&
        $scope.cellList[8].status == "O") {
        window.alert("player 2 wins!");
    }

    if($scope.cellList[2].status == "O" &&
        $scope.cellList[4].status == "O" &&
        $scope.cellList[6].status == "O") {
        window.alert("player 2 win!");
    }
//below is tie logic
  if($scope.cellList[0].status == "X" &&
        $scope.cellList[1].status == "O" &&
        $scope.cellList[2].status == "X" &&
        $scope.cellList[3].status == "O" &&
        $scope.cellList[4].status == "O" &&
        $scope.cellList[5].status == "X" &&
        $scope.cellList[6].status == "X" &&
        $scope.cellList[7].status == "X" &&
        $scope.cellList[8].status == "O") {
        window.alert("tie game!");
    }
      if($scope.cellList[0].status == "X" &&
        $scope.cellList[1].status == "O" &&
        $scope.cellList[2].status == "O" &&
        $scope.cellList[3].status == "O" &&
        $scope.cellList[4].status == "X" &&
        $scope.cellList[5].status == "X" &&
        $scope.cellList[6].status == "X" &&
        $scope.cellList[7].status == "X" &&
        $scope.cellList[8].status == "O") {
        window.alert("tie game!");
}

if($scope.cellList[0].status == "O" &&
        $scope.cellList[1].status == "X" &&
        $scope.cellList[2].status == "X" &&
        $scope.cellList[3].status == "X" &&
        $scope.cellList[4].status == "O" &&
        $scope.cellList[5].status == "O" &&
        $scope.cellList[6].status == "X" &&
        $scope.cellList[7].status == "O" &&
        $scope.cellList[8].status == "X") {
        window.alert("tie game!");
}

if($scope.cellList[0].status == "O" &&
        $scope.cellList[1].status == "X" &&
        $scope.cellList[2].status == "O" &&
        $scope.cellList[3].status == "X" &&
        $scope.cellList[4].status == "X" &&
        $scope.cellList[5].status == "O" &&
        $scope.cellList[6].status == "X" &&
        $scope.cellList[7].status == "O" &&
        $scope.cellList[8].status == "X") {
        window.alert("tie game!");
}

if($scope.cellList[0].status == "O" &&
        $scope.cellList[1].status == "O" &&
        $scope.cellList[2].status == "X" &&
        $scope.cellList[3].status == "X" &&
        $scope.cellList[4].status == "X" &&
        $scope.cellList[5].status == "O" &&
        $scope.cellList[6].status == "O" &&
        $scope.cellList[7].status == "X" &&
        $scope.cellList[8].status == "X") {
        window.alert("tie game!");
}

if($scope.cellList[0].status == "X" &&
        $scope.cellList[1].status == "O" &&
        $scope.cellList[2].status == "X" &&
        $scope.cellList[3].status == "X" &&
        $scope.cellList[4].status == "O" &&
        $scope.cellList[5].status == "O" &&
        $scope.cellList[6].status == "O" &&
        $scope.cellList[7].status == "X" &&
        $scope.cellList[8].status == "X") {
        window.alert("tie game!");
}

if($scope.cellList[0].status == "X" &&
        $scope.cellList[1].status == "X" &&
        $scope.cellList[2].status == "O" &&
        $scope.cellList[3].status == "O" &&
        $scope.cellList[4].status == "O" &&
        $scope.cellList[5].status == "X" &&
        $scope.cellList[6].status == "X" &&
        $scope.cellList[7].status == "O" &&
        $scope.cellList[8].status == "X") {
        window.alert("tie game!");
}
        if($scope.cellList[0].status == "O" &&
        $scope.cellList[1].status == "X" &&
        $scope.cellList[2].status == "O" &&
        $scope.cellList[3].status == "X" &&
        $scope.cellList[4].status == "O" &&
        $scope.cellList[5].status == "X" &&
        $scope.cellList[6].status == "X" &&
        $scope.cellList[7].status == "O" &&
        $scope.cellList[8].status == "X") {
        window.alert("tie game!");
}

       if($scope.cellList[0].status == "O" &&
        $scope.cellList[1].status == "X" &&
        $scope.cellList[2].status == "X" &&
        $scope.cellList[3].status == "X" &&
        $scope.cellList[4].status == "O" &&
        $scope.cellList[5].status == "O" &&
        $scope.cellList[6].status == "O" &&
        $scope.cellList[7].status == "X" &&
        $scope.cellList[8].status == "X") {
        window.alert("tie game!");
}

    if($scope.cellList[0].status == "O" &&
        $scope.cellList[1].status == "X" &&
        $scope.cellList[2].status == "X" &&
        $scope.cellList[3].status == "X" &&
        $scope.cellList[4].status == "O" &&
        $scope.cellList[5].status == "O" &&
        $scope.cellList[6].status == "O" &&
        $scope.cellList[7].status == "X" &&
        $scope.cellList[8].status == "X") {
        window.alert("tie game!");
}

    if($scope.cellList[0].status == "X" &&
        $scope.cellList[1].status == "X" &&
        $scope.cellList[2].status == "O" &&
        $scope.cellList[3].status == "O" &&
        $scope.cellList[4].status == "O" &&
        $scope.cellList[5].status == "X" &&
        $scope.cellList[6].status == "X" &&
        $scope.cellList[7].status == "X" &&
        $scope.cellList[8].status == "O") {
        window.alert("tie game!");
}

   if($scope.cellList[0].status == "X" &&
        $scope.cellList[1].status == "O" &&
        $scope.cellList[2].status == "X" &&
        $scope.cellList[3].status == "X" &&
        $scope.cellList[4].status == "O" &&
        $scope.cellList[5].status == "X" &&
        $scope.cellList[6].status == "O" &&
        $scope.cellList[7].status == "X" &&
        $scope.cellList[8].status == "O") {
        window.alert("tie game!");
}

 if($scope.cellList[0].status == "O" &&
        $scope.cellList[1].status == "X" &&
        $scope.cellList[2].status == "X" &&
        $scope.cellList[3].status == "X" &&
        $scope.cellList[4].status == "X" &&
        $scope.cellList[5].status == "O" &&
        $scope.cellList[6].status == "O" &&
        $scope.cellList[7].status == "O" &&
        $scope.cellList[8].status == "X") {
        window.alert("tie game!");
}





}









  } ;



}) ;