
alert("Welcome to your favoprite game");
let score={
    win:0,
    loss:0,
    tie:0,
}
function choiceBat(){
    let randomNumber=Math.random()*3;
    let computerChoice;
    if(randomNumber>0 && randomNumber<=1){
        computerChoice='Bat';
    }else if(randomNumber>1 && randomNumber<=2){
        computerChoice='Ball';
    }else{
        computerChoice='Stump';
    }

    let result;
    if(computerChoice==='Bat'){
        result=`Match tie`;
        score.tie++; 
    }else if(computerChoice==='Ball'){
        result=`You won`;
        score.win++;
    }else if(computerChoice==='Stump'){
        result=`Computer won`;
        score.loss++;
    }
    document.querySelector('#refer').innerHTML = `
  Your choice is <strong>Bat</strong>.<br>
  Computer choice is <strong>${computerChoice}</strong>.<br>
  <strong>${result}</strong>.<br>
  Your final score is:<br>Win:${score.win}<br>Loss:${score.loss}<br>Tie:${score.tie}`;
}

function choiceBall(){
    let randomNumber=Math.random()*3;
    let computerChoice;
    if(randomNumber>0 && randomNumber<=1){
        computerChoice='Bat';
    }else if(randomNumber>1 && randomNumber<=2){
        computerChoice='Ball';
    }else{
        computerChoice='Stump';
    }

    let result;
    if(computerChoice==='Bat'){
        result=`computer won`;
        score.loss++;
    }else if(computerChoice==='Ball'){
        result=`Match tie`;
        score.tie++;
    }else if(computerChoice==='Stump'){
        result=`You won`;
        score.win++;
    }
    document.querySelector('#refer').innerHTML = `
  Your choice is <strong>Ball</strong>.<br>
  Computer choice is <strong>${computerChoice}</strong>.<br>
  <strong>${result}</strong>.<br>
  Your final score is:<br>Win:${score.win}<br>Loss:${score.loss}<br>Tie:${score.tie}`;
}

function choiceStump(){
    let randomNumber=Math.random()*3;
    let computerChoice;
    if(randomNumber>0 && randomNumber<=1){
        computerChoice='Bat';
    }else if(randomNumber>1 && randomNumber<=2){
        computerChoice='Ball';
    }else{
        computerChoice='Stump';
    }

    let result;
    if(computerChoice==='Bat'){
        result=`You won`;
        score.win++;
    }else if(computerChoice==='Ball'){
        result=`Computer won`;
        score.loss++
    }else if(computerChoice==='Stump'){
        result=`Match tie`;
        score.tie++;
    }
    document.querySelector('#refer').innerHTML = `
  Your choice is <strong>Stump</strong>.<br>
  Computer choice is <strong>${computerChoice}</strong>.<br>
  <strong>${result}</strong>.<br>
  Your final score is:<br>Win:${score.win}<br>Loss:${score.loss}<br>Tie:${score.tie}`;
}

function endGame(){
    let result=` `;
    document.querySelector('#refer').innerHTML = `${result}`;
}
