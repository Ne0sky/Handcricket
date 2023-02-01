//--------- INDEX------------------------------------
const head = document.querySelector(".head")
const tail = document.querySelector(".tail")
const bat = document.querySelector(".bat")
const ball = document.querySelector(".ball")

const celebration1 = document.querySelector(".celebration-img1")
const celebration2 = document.querySelector(".celebration-img2")
const sad = document.querySelector(".sad")
const res = document.querySelector(".result")
const res_div = document.querySelector(".result-div")
const card_title = document.querySelector(".card-title")
const coin_hand_img = document.querySelector(".coin-hand-img")
const next_button = document.querySelector(".next-btn")
const next_text = document.querySelector(".next-text")
const play_div = document.querySelector(".play-div")
const play_btn = document.querySelector(".play-btn")
const play_text = document.querySelector(".play-text")
const head_img = document.querySelector(".head-img")
const tail_img = document.querySelector(".tail-img")
const toss_div = document.querySelector(".toss")
const choice_div = document.querySelector(".choice-card")

const info = document.querySelector(".info")
const pitch = document.querySelector(".pitch")
const keypad = document.querySelector(".keypad")
const over = document.querySelector(".over-number")

//---------------------------------------------------

const btn = document.querySelectorAll("button")


let score = parseInt(document.querySelector(".run-number").innerText);
let runs = document.querySelector(".run-number");

let user_number = document.querySelector(".user-number")
let botkun_numberhtml = document.querySelector(".botkun-number")

//--------------INDEX-------------------------

let x = Math.floor((Math.random() * 10) + 1);
console.log(x);
let ans = x % 2;

console.log(ans);



var result = 1

head.addEventListener('click', heads_case)
function heads_case(e) {
    tail.removeEventListener("click", tails_case)
    console.log("heads");

    if (ans == 1) {


        result = 1
        console.log(result);
        win()


    }

    else {
        lose()

        result = 0
        console.log(result);

    }
    head.removeEventListener('click', heads_case)

}


tail.addEventListener('click', tails_case)
function tails_case(e) {
    console.log("tails");
    head.removeEventListener('click', heads_case)
    if (ans == 0) {
        win()

        result = 1
        console.log(result);

    }
    else {
        lose()

        result = 0
        console.log(result);

    }

    tail.removeEventListener("click", tails_case)

}

var choice = 1;

bat.addEventListener('click', bats_case)
function bats_case() {
    choice = 0
    ball.removeEventListener('click', balls_case)
    res.textContent = "You chose to bat first"
    console.log("CHOICE : ",choice)
    bat.removeEventListener('click', bats_case)
}

ball.addEventListener('click', balls_case)
function balls_case() {
    choice = 1
    bat.removeEventListener('click', bats_case)
    res.textContent = "You chose to ball first"

    ball.removeEventListener('click', balls_case)
}

play_btn.addEventListener('click', play)
function play() {
    if (choice == 0) {
        pitch_render("bat")
        
    }
    else {
        pitch_render("ball")
    }
    keypad_logic()
}

function pitch_render(abc) {
    play_div.style.display = 'none'
    console.log(`user chose to ${abc} first`)
    choice_div.style.display = 'none'
    res.textContent = ""
    card_title.textContent = ""
    info.style.display = 'block'
    pitch.style.display = 'block'
    keypad.style.display = 'block'
}

function user_balling_render() {
    play_div.style.display = 'none'
    console.log("user chose to ball first")
    choice_div.style.display = 'none'
    res.textContent = ""
    card_title.textContent = ""
    info.style.display = 'block'
    pitch.style.display = 'block'
    keypad.style.display = 'block'
    
}

let current_score = 0
let botkun_number = 0

var message
var target_text
let btn_ballnow


let score_1

function reset_pitch()
{
    btn_ballnow.style.display='none'
    message.style.display='none'
    target_text.style.display='none'
    current_ball=1
    over.innerText = get_over(current_ball)
    current_score=0
    user_number.innerText = 0;
    score_1=score
    console.log("score1 is ",score_1)
    score=0
    runs.innerText = 0
    botkun_number=0
    botkun_numberhtml.innerText = 0

}



function second_innings(type)
{
    create_btn(type)
}

function create_btn(type) {
    
    btn_ballnow = document.createElement('button')
    btn_ballnow.textContent = `${type}`
    btn_ballnow.classList.add("text-4xl", "text-white", "text-center", "bg-zinc-700", "w-1/3", "rounded-xl", "shadow-lg", "m-5", "p-3")
    btn_ballnow.style.position='relative'
    btn_ballnow.style.left="50%"
    btn_ballnow.style.transform='translate(-50%)'
    document.body.appendChild(btn_ballnow)
    btn_ballnow.addEventListener('click',()=>
    {
        if(!choice)
        pitch_render("ball")
        else
        pitch_render("bat")

        reset_pitch()
    })
}





function botkun_play() {
    botkun_number = Math.floor((Math.random() * 6) + 1);
    console.log("botkun_number")
    console.log(botkun_number)
    botkun_numberhtml.innerText = botkun_number

}

let total_ball = 3;
let current_ball = 1

function get_over(balls) {
    let div = parseInt(balls / 6)
    let rem = (balls % 6) / 10

    console.log("overs :")
    console.log(div+rem)
    return div + rem
}

let bot_target=0

function get_target() {
    console.log("GET TARGET")
    console.log(score)
    bot_target=score+1
    return score + 1
}
//------------- GAME OVER WHEN USER BATTING---------------------

let no_of_innings=0

function game_over()
{

}

function game_over() {
    no_of_innings++
    if(no_of_innings==1)
    {
    console.log("Over Up")
    keypad.style.display = 'none'
    pitch.style.display = 'none'
    message = document.createElement('p')
    target_text = document.createElement('p')
    message.textContent = "Over Up"
    target_text.textContent = "Target : " + get_target()

    message.classList.add("msg","text-6xl", "text-white", "text-center")
    target_text.classList.add("target","text-6xl", "text-white", "text-center")
    document.body.appendChild(message)
    document.body.appendChild(target_text)
    if(!choice)
    second_innings("Ball")
    else
    second_innings("Bat")
    }
    if(no_of_innings==2)
    {
    keypad.style.display = 'none'
    pitch.style.display = 'none'
    message = document.createElement('p')
    target_text = document.createElement('p')
    target_text.textContent="Over Up !"
    target_text.classList.add("text-6xl", "text-white", "text-center")
    document.body.appendChild(target_text)
    if(choice==0 && score_1>score_2)
    message.textContent = "You won while balling"
    else message.textContent = "You Lose while balling"
    if(choice==1 && score_1<score_2)
    message.textContent = "You won while batting"
    else message.textContent = "You Lose while batting"
    message.classList.add("text-6xl", "text-white", "text-center")
    document.body.appendChild(message)
    }
    
}


function game_over_out() {
    no_of_innings++
    if(no_of_innings==1)
    {
        console.log("You are out")
    keypad.style.display = 'none'
    pitch.style.display = 'none'
    message = document.createElement('p')
    target_text = document.createElement('p')
    message.textContent = "OUT !"
    target_text.textContent = "Target : " + get_target()
    // target_text.textContent=runs+1
    message.classList.add("text-6xl", "text-white", "text-center")
    target_text.classList.add("text-6xl", "text-white", "text-center")
    document.body.appendChild(message)
    document.body.appendChild(target_text)
    if(!choice)
    second_innings("Ball")
    else
    second_innings("Bat")
    }
    
    if(no_of_innings==2)
    {
        
    keypad.style.display = 'none'
    pitch.style.display = 'none'
    message = document.createElement('p')
    target_text = document.createElement('p')
    target_text.textContent="OUT !"
    target_text.classList.add("text-6xl", "text-white", "text-center")
    document.body.appendChild(target_text)
    if(choice==0 && score_1>score_2)
    message.textContent = "You won while balling"
    else message.textContent = "You Lose while balling"
    if(choice==1 && score_1<score_2)
    message.textContent = "You won while batting"
    else message.textContent = "You Lose while batting"
    message.classList.add("text-6xl", "text-white", "text-center")
    document.body.appendChild(message)
    }

}

//----------------IS-OVER \ IS-OUT-------------------

function is_over()
{
    return current_ball == total_ball
}

function is_out()
{
    return current_score==botkun_number
}

let score_2
let botkun_bat_score
//-------------------------------------------------------------------
function keypad_logic() {

    btn.forEach((e) => {
        e.addEventListener('click', () => {
            console.log("You pressed", e.id)
            current_score = parseInt(e.id)
            botkun_play()

            
            over.innerText = get_over(current_ball)

            user_number.innerText = current_score;

            if(no_of_innings==1)
            {
                console.log("NO OF INNINGS 1 ||")
                if(is_out())
            {
                console.log("You are out")
                game_over_out()
                return
            }
            if(is_over())
            {
                console.log("Over Up")
                score += parseInt(e.id);
                console.log("score:",score)
                runs.innerText = score;
                score_2=score
                
                game_over()
                return
            }
                
                    current_ball++
                    if(choice==0)
                    score += parseInt(e.id);
                    if(choice==1)
                    score += botkun_number
                    console.log("score:",score)
                    score_2=score
                    console.log("score_2-",score_2)
                    runs.innerText = score;
            }

            if(no_of_innings==2)
            {
                console.log("NO OF INNINGS 2 ||")
                if(is_out())
            {
                console.log("You are out")
                game_over_out()
                return
            }
            if(is_over())
            {
                console.log("Over Up")
                score += parseInt(e.id);
                console.log("score:",score)
                runs.innerText = score;
                
                
                game_over()
                return
            }
                
                    current_ball++
            
                    if(choice==0)
                    score += botkun_number
                    if(choice==1)
                    score += parseInt(e.id);
                    console.log("score:",score)
                    
                    console.log("score_2-",score_2)
                    runs.innerText = score;
            }

            

            
               })
    })
}



next_button.addEventListener('click', () => {
    if (result == 1) {
        console.log("win")
        console.log(result)
        choice_win()
    }

    else {
        console.log("lose")
        console.log(result)
        choice_lose()
    }

})





function win() {
    res.textContent = "You Won !!"
    celebration1.style.display = 'block'
    celebration1.src = "assests/images/celebration.png"
    celebration2.src = "assests/images/celebration.png"
}

function lose() {
    res.textContent = "You lose !!"
    celebration1.style.display = 'none'
    celebration2.src = "assests/images/sad.png"
}

function choice_win() {
    card_title.textContent = "Pick your option"
    coin_hand_img.style.display = 'none'
    head_img.src = "assests/images/choice-bat.png"
    tail_img.src = "assests/images/choice-ball.png"
    res.textContent = ""
    celebration1.style.display = 'none'
    celebration2.style.display = 'none'
    next_button.style.display = 'none'
    play_div.style.display = 'block'
    toss_div.style.display = 'none'
    choice_div.style.display = 'block'
}

function choice_lose() {
    card_title.textContent = "Bot-kun chose to bat first"
    coin_hand_img.style.display = 'none'
    head_img.src = "assests/images/choice-bat.png"
    tail_img.src = "assests/images/choice-ball.png"
    res.textContent = ""
    celebration1.style.display = 'none'
    celebration2.style.display = 'none'
    next_button.style.display = 'none'
    play_div.style.display = 'block'
    toss_div.style.display = 'none'

}


