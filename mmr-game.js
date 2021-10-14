// ---------- elements ---------- 
let boxbutton1 = document.getElementById("box box1")
let boxbutton2 = document.getElementById("box box2")
let boxbutton3 = document.getElementById("box box3")
let boxbutton4 = document.getElementById("box box4")
let boxbutton5 = document.getElementById("box box5")
let boxbutton6 = document.getElementById("box box6")
let start = document.getElementById("start")
let stopp = document.getElementById("stop")
let consolee = document.getElementById("console")

// ---------- listeners ---------- 
start.addEventListener("click", startGame)
stopp.addEventListener("click", end)
boxbutton1.addEventListener("click", check.bind(null, 1))
boxbutton2.addEventListener("click", check.bind(null, 2))
boxbutton3.addEventListener("click", check.bind(null, 3))
boxbutton4.addEventListener("click", check.bind(null, 4))
boxbutton5.addEventListener("click", check.bind(null, 5))
boxbutton6.addEventListener("click", check.bind(null, 6))

// ---------- functions ---------- 
function endMSG() {
    consolee.innerText = ">" + "game over,\nyour score: " + levelscore
    consolee.innerText += "\n\n>" + "click start button to play"
}

function changebgdark() {
    document.body.style.background = "linear-gradient(to right, hsla(3, 56%, 8%, 0.644), hsl(257, 89%, 18%))"
}

function end() {
    document.body.style.background = "linear-gradient(to right, hsla(98, 87%, 48%, 0.644), hsl(19, 93%, 42%))"
    endMSG()
    levelscore = 0
    document.getElementById("levels").innerHTML = levelscore
    list = []
    started = 0
    i = 0
    isgood = 1
    cancheck = 0
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function check(a) {
    if (started == 1) {
        if (cancheck == 1) {
            if (list[i] == a) {
                o = i + 1
                consolee.innerText = ">(" + o + "/" + list.length + ")"
                if (o == list.length) {
                    isgood = 1
                    consolee.innerText = ">" + "good job, u can continue"
                }
            } else {
                isgood = 0
                end()
            }
            i++
        } else {
            consolee.innerText += "\n>" + "you have to wait for the combination to end"
        }
    } else {
        consolee.innerText = ">" + "click start button to play"
    }
}

function startGame() {
    changebgdark()
    started = 1
    cancheck = 0
    i = 0
    let random = Math.floor(Math.random() * 6) + 1
    list.push(random)
    if (isgood == 1) {
        levelscore += 1
        document.getElementById("levels").innerHTML = levelscore
        consolee.innerText = ">" + "wait now..."
        for (let z = 0; list.length > z; z++) {
            sleep(1000 * z).then(() => {
                let rand = list[z]
                if (rand == 1) {
                    boxbutton1.style.backgroundColor = "rgb(0, 255, 0, 0.2)"
                    sleep(500).then(() => {
                        boxbutton1.style.backgroundColor = "rgb(0, 255, 0)"
                    })
                } else if (rand == 2) {
                    boxbutton2.style.backgroundColor = "rgb(255, 0, 0, 0.2)"
                    sleep(500).then(() => {
                        boxbutton2.style.backgroundColor = "rgb(255, 0, 0)"
                    })
                } else if (rand == 3) {
                    boxbutton3.style.backgroundColor = "rgb(255, 255, 0, 0.2)"
                    sleep(500).then(() => {
                        boxbutton3.style.backgroundColor = "rgb(255, 255, 0)"
                    })
                } else if (rand == 4) {
                    boxbutton4.style.backgroundColor = "rgb(0, 0, 255, 0.2)"
                    sleep(500).then(() => {
                        boxbutton4.style.backgroundColor = "rgb(0, 0, 255)"
                    })
                } else if (rand == 5) {
                    boxbutton5.style.backgroundColor = "rgb(255, 51, 153, 0.2)"
                    sleep(500).then(() => {
                        boxbutton5.style.backgroundColor = "rgb(255, 51, 153)"
                    })
                } else if (rand == 6) {
                    boxbutton6.style.backgroundColor = "rgb(255, 51, 0, 0.2)"
                    sleep(500).then(() => {
                        boxbutton6.style.backgroundColor = "rgb(255, 51, 0)"
                    })
                } else if (rand > 6 || rand < 1) {
                    consolee.innerText = ">" + "click start button to play"
                    end()
                }
            })
        }
        sleep(900 * list.length).then(() => {
            cancheck = 1
            consolee.innerText = ">" + "let's go"
        })
    } else {
        consolee.innerText = ">" + "sorry, u haven't clicked the appropriate number of buttons\n"
        end()
    }
    isgood = 0
}

// ---------- variables ---------- 
let levelscore = 0
let list = []
let started = 0
let i = 0
let isgood = 1
let cancheck = 0

consolee.innerText = ">" + "click start button to play"
