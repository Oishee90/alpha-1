function play(){
    // hide the home screen to hide the screen and the class hidden to the home section
    hideElementById('home-section');
    hideElementById('final-score');
    // show the playground
    showElementById('play-ground');
    // set life and score

    setInnerText('current-score', 0);
    setInnerText('current-life', 5)
//...............................remove color

 
    continueGane();
}

function continueGane(){
    // generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log(alphabet);

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;


    // set the alphabet color
    addbackgroundcolorById(alphabet);
}




// key press kora hoise eita bujhbe
function  handellerKey(event){
    // console.log(event.key)
    // jeita press korsi
    const pressed = event.key;

    // stop the game
    if(pressed === 'Escape'){
        gameOver();
    }
    // console.log('pressed',pressed)

    // expected press
    const currentElement = document.getElementById('current-alphabet')
    const currentAlpha = currentElement.innerText;
    const expected = currentAlpha.toLowerCase()
    // console.log(pressed, expected)
    if(pressed === expected){
        // update score
        const currentScore = getInnerText('current-score')
        const newScore = currentScore + 1;

        setInnerText('current-score', newScore);


        // 1.get the current score
        // const  currentScoreText = document.getElementById('current-score')
        // const currentScore = currentScoreText.innerText;
        // const score = parseInt(currentScore);

        // // 2.increase the score
        // const  newscore = score + 1;

        // // start a new rpund
        // currentScoreText.innerText = newscore;


        // removed background 
        removebackgroundcolorById(expected)
        continueGane()
    }
    else{
          const currentLife = getInnerText('current-life');
          const updateLife = currentLife - 1;
          setInnerText('current-life', updateLife);



       


        // get the life number
    //    const currentLifeText = document.getElementById('current-life');
    //    const currentLife = currentLifeText.innerText
    //    const life = parseInt(currentLife);
    //     // reduce life count
    //       const  newLife = life - 1;
    //     // display the update life
    //     currentLifeText.innerText = newLife

// khela off....................
if(updateLife === 0){

   gameOver();


    }

} 
}

document.addEventListener('keyup', handellerKey);

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    const lastscore = getInnerText('current-score');
  
    setInnerText('last-score', lastscore);
   
    const currentAlphabet = getElementText('current-alphabet');
    removebackgroundcolorById(currentAlphabet);
}
