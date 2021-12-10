var prizeMoney=0,score=0;

var kbc =[
    {
    question :"How many days are there in a week? \n (a).7 \n (b).8",
    answer:"a",
    },
    {
        question:"How many hours are there in a day?\n(a).24\n(b).25",
        answer:"a",
    },
    {
        question:"How many minutes are there in a hour?\n(a).60 \n (b).70",
        answer:"a",
    },
    ];
    for(var i=0;i<kbc.length;i++){
        var output=prompt(kbc[i].question);
        if(output==kbc[i].answer){
            alert("Correct answer!");
            prizeMoney+=1000;
            score++;
        }
        else{
            alert("WRONG answerr!");
            break;
        }
    }
    alert("Out of "+kbc.length+" questions "+score+ " were correct and you've won Rs."+prizeMoney);
