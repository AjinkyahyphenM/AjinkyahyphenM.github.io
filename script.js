
let main_scroll = 0
let nav_opacity = 100
let scroll_reference = 0

const NAV_HEIGHT = Number(getComputedStyle(document.querySelector("nav")).getPropertyValue("height").slice(0,-2))
const BODY_HEIGHT = getComputedStyle(document.querySelector("body")).getPropertyValue("height")
const HERO_HEIGHT = Number(getComputedStyle(document.querySelector(".hero")).getPropertyValue("height").slice(0, -2))


const WORDSPACE = {
  // "words":["Better.", "बेहतर.", "より良い.", "mejor.", "meilleur."],
  "words": ["Human.", "Writer.", "Engineer.", "Programmer."],
  "letter_ptr": 0,
  "word_ptr": 0,
  "inc": true
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

function calculateScroll(){
  main_scroll = document.querySelector("main").scrollTop
  if (main_scroll > scroll_reference){
    document.querySelector(".filler_cnt").innerHTML += "<div> &nbsp </div>"
    scroll_reference = main_scroll
    // updateNav("dec")
  }
  else if (main_scroll < scroll_reference){
    document.querySelector(".filler_cnt").innerHTML.replace("<div> &nbsp </div>", "")
    scroll_reference = main_scroll
    // updateNav("inc")
  }
}

function updateNav(mode){
  if (mode == "dec"){
    nav_opacity = (nav_opacity-=5) >= 0 ? nav_opacity-=5 : 0
    document.querySelector("nav").style.opacity = `${nav_opacity}%`
  }
  else{
    nav_opacity = (nav_opacity++) <= 100 ? nav_opacity++ : 100
    document.querySelector("nav").style.opacity = `${nav_opacity}%`
  }
}

function updateHero(){
  let hero_ele = document.querySelector(".hero")
  let main_ele = document.querySelector("main")
  let opacity = hero_ele.style.opacity
  let nav_height = getComputedStyle(document.querySelector("nav")).getPropertyValue("height")
  let top = 0
  let scale = 1

  // height = (height + main_scroll) < 90 ? (height + main_scroll) : 90
  top = (top - main_scroll/4) > -HERO_HEIGHT ? (top - main_scroll/4) : -HERO_HEIGHT
  opacity = (100 - main_scroll) >= 0 ? (100-main_scroll) : 0
  scale = (1 - (main_scroll/4)/100) > 0 ? (1 - (main_scroll/4)/100) : 0


  hero_ele.style.opacity = `${opacity}%`
  hero_ele.style.transform = `scale(${scale})`
  main_ele.style.position = `relative`
  main_ele.style.top = `${top}px`

}


setInterval(anmHero, 300)

document.querySelector("main").addEventListener("scroll", ()=>{
  calculateScroll()
  updateHero()
})
