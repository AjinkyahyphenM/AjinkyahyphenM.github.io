
const WORDSPACE = {
  // "words":["Better.", "बेहतर.", "より良い.", "mejor.", "meilleur."],
  "words": ["Human.", "Writer.", "Engineer.", "Programmer."],
  "letter_ptr": 0,
  "word_ptr": 0,
  "inc": true
}

const intersectorOptions = {
  "threshold": 0.1
}

function dispNavMenu(){
  if(document.getElementById("mob_nav").style.display == "flex"){
    document.getElementById("mob_nav").style.display = "none";
    console.log(document.getElementById("mob_nav").style.display);
  }
  else{
    document.getElementById("mob_nav").style.display = "flex";
  }
}


function anmHero(){

  if (WORDSPACE.word_ptr == 2){
    document.querySelector(".hero_a").innerHTML = "an"
  }
  else{
    document.querySelector(".hero_a").innerHTML = "a"
  }

  if (WORDSPACE.word_ptr >= (WORDSPACE.words.length)){
    WORDSPACE.letter_ptr = 0
    WORDSPACE.word_ptr = 0
  }

  if (WORDSPACE.letter_ptr <= -1){
    WORDSPACE.word_ptr += 1
    if (WORDSPACE.word_ptr >= (WORDSPACE.words.length)){
      WORDSPACE.word_ptr = 0
    }
    WORDSPACE.letter_ptr = 0
    WORDSPACE.inc = true
  }
  
  if (WORDSPACE.letter_ptr >= WORDSPACE.words[WORDSPACE.word_ptr].length){
    WORDSPACE.inc = false
  }

  if (WORDSPACE.inc == true){
    document.querySelector("#better_word").innerHTML += WORDSPACE.words[WORDSPACE.word_ptr][WORDSPACE.letter_ptr]
    WORDSPACE.letter_ptr += 1
  }
  else{
    document.querySelector("#better_word").innerHTML = WORDSPACE.words[WORDSPACE.word_ptr].slice(0, WORDSPACE.letter_ptr)
    WORDSPACE.letter_ptr -= 1
  }

}

setInterval(anmHero, 300)



// const observer = new IntersectionObserver((entries) =>{
//   entries.forEach((entry)=>{
//     if (entry.isIntersecting){
//       document.querySelector(".hero_cnt").style.display = "flex"
//     }
//     else{
//       document.querySelector(".hero_cnt").style.display = "none"
//     }
//   })
// }, intersectorOptions)
// const ele = document.querySelector(".nav_cnt")
// observer.observe(ele)