const handOptions = {
    "rock": "images/Rock2.png",
    "paper": "images/Paper2.png",
    "scissors": "images/Scissors2.png"
}

let score = 0;


const pickUserHand = (hand) => {
    console.log(hand);
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let contest = document.querySelector (".contest");
    contest.style.display ="flex";
    // show new event with picked hand
    // Hide the current page

    // set user pick
    document.getElementById("userpickimage").src = handOptions[hand];  
        
    let cpHand = pickComputerHand(hand);
    referee(hand, cpHand)
};
    
const pickComputerHand = (hand) => {
    let hands =["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * 3)];
    
    // set computer image 
    document.getElementById("comupterpickimage").src = handOptions[cpHand]
    console.log("CPHand", cpHand);

    return cpHand;
};

    const referee = (userHand, cpHand) => {
        if (userHand == "paper" && cpHand == "scissors") {
          setDecision("YOU LOSE!");
        }
        if (userHand == "paper" && cpHand == "rock") {
          setDecision("YOU WIN!");
          setScore(score + 1);
        }
        if (userHand == "paper" && cpHand == "paper") {
          setDecision("It's a tie!");
        }
        if (userHand == "rock" && cpHand == "scissors") {
          setDecision("YOU WIN!");
          setScore(score + 1);
        }
        if (userHand == "rock" && cpHand == "paper") {
          setDecision("YOU LOSE!");
        }
        if (userHand == "rock" && cpHand == "rock") {
          setDecision("It's a tie!");
        }
        if (userHand == "scissors" && cpHand == "scissors") {
          setDecision("It's a tie!");
        }
        if (userHand == "scissors" && cpHand == "rock") {
          setDecision("YOU LOSE!");
        }
        if (userHand == "scissors" && cpHand == "paper") {
          setDecision("YOU WIN!");
          setScore(score + 1);
        }
      };

const setDecision =(decision) =>{
    console.log(decision);
    document.querySelector(".decision h1").innerText = decision;
}

const setScore =(newScore) =>{
    score = newScore;
    document.querySelector(".score h1").innerText = score;
}

const restartGame =() =>{
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    let contest = document.querySelector (".contest");
    contest.style.display ="none";
}

const rulesWindow =()=>{
    let rule = document.querySelector(".ruleimage")
    rule.style.display ="flex";

    let wrapperRule = document.querySelector (".wrapper");
    wrapperRule.style.display="none";

}
const closeRule = ()=>{
    let rule = document.querySelector(".ruleimage")
    rule.style.display ="none";

    let wrapperRule = document.querySelector (".wrapper");
    wrapperRule.style.display="flex";
}