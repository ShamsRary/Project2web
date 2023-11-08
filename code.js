let puzzle = [];
let answer = [];
let moves = 1;
let start = false;



function initialize(){
    Table = document.getElementById("Table");
    let size_of_puzzle = 4;
    makeTable();
}

function makeTable(){
    let numRolls = 4;
    let start = 1;
    let row = 0;
    

    for (let i =0; i < numRolls; i++){
        let newRow = Table.insertRow();

        newCell = newRow.insertCell();
        newCell.style.width = "50px"; //this works
        newCell.style.height = "50px"; //this works
        newCell.innerHTML = "<button>"+start+"</button>";
        newCell.setAttribute("id", "uniqueIdentifier" + start);
        newCell.setAttribute('onclick','isValidmove('+start+');');
        puzzle.push(newCell.innerHTML);
        answer.push(newCell.innerHTML);
        start ++;
        
        newCell = newRow.insertCell();
        newCell.style.width = "50px"; //this works
        newCell.style.height = "50px"; //this works
        newCell.innerHTML = "<button>"+start+"</button>";
        newCell.setAttribute("id", "uniqueIdentifier" + start);
        newCell.setAttribute('onclick','isValidmove('+start+');');
        puzzle.push(newCell.innerHTML);
        answer.push(newCell.innerHTML);
        start ++;

        newCell = newRow.insertCell();
        newCell.style.width = "50px"; //this works
        newCell.style.height = "50px"; //this works
        newCell.innerHTML = "<button>"+start+"</button>";
        newCell.setAttribute("id", "uniqueIdentifier" + start);
        newCell.setAttribute('onclick','isValidmove('+start+');');
        puzzle.push(newCell.innerHTML);
        answer.push(newCell.innerHTML);
        start ++;

        newCell = newRow.insertCell();
        if(start > 15){
            newCell.style.width = "50px"; //this works
            newCell.style.height = "50px"; //this works
            newCell.innerHTML = newCell.innerHTML = "<button>blank</button>";;
            newCell.setAttribute("id", "uniqueIdentifier");
            newCell.setAttribute('onclick','isValidmove(16);');
            puzzle.push(newCell.innerHTML);
            answer.push(newCell.innerHTML);
            break
        }
        newCell.style.width = "50px"; //this works
        newCell.style.height = "50px"; //this works
        newCell.innerHTML = "<button>"+start+"</button>";
        newCell.setAttribute("id", "uniqueIdentifier" + start);
        newCell.setAttribute('onclick','isValidmove('+start+');');
        puzzle.push(newCell.innerHTML);
        answer.push(newCell.innerHTML);
        start ++;
    }

}


function play(){
    start = true;
}



function reset(){
    start = false;
}

function isValidmove(move){
        let check = [-1, 1, 4, -4];

        for(let i = 0; i < check.length; i++){
                if(puzzle[move + check[i] -1] === '<button>blank</button>'){

                    
                    transfer = puzzle[move + check[i] -1];
                    puzzle[move + check[i] -1] = puzzle[move -1];
                    puzzle[move -1] = transfer;


                    display();
                    if(start){
                        moves += 1;
                        if(win()){
                            alert("You won and got this many points " + score(moves));
                        }
                    }
                    
                    return true;
                }
        }
        return false;


}

score = (val) => (val + Math.floor((Math.random() * 10) + 1))* 3;


function display(){
    for(let i = 0; i < puzzle.length - 1; i++){
        document.querySelector("#uniqueIdentifier"+(i + 1)).innerHTML=(puzzle[i]);
    }
    document.querySelector("#uniqueIdentifier").innerHTML=(puzzle[15]);
    document.querySelector("#id").innerHTML=(`Moves Made: ${moves}!`);
    

}


function win(){
    for(let i = 0; i < puzzle.length - 1; i++){
        if(puzzle[i] != (answer[i])){
            return false;
        }
    }
    return true;
}