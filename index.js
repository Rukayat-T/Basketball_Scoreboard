let homeSc = document.getElementById("home-sc")
let guestSc = document.getElementById("guest-sc")

let Hscore = 0
let Gscore = 0


function addOneH()
{
    Hscore += 1
    homeSc.innerText = Hscore
    
}
function addTwoH()
{
     Hscore += 2
    homeSc.innerText = Hscore
    
}
function addThreeH()
{
     Hscore += 3
    homeSc.innerText = Hscore
}

function addOneG()
{
     Gscore += 1
     guestSc.innerText = Gscore
}
function addTwoG()
{
      Gscore += 2
     guestSc.innerText = Gscore
}
function addThreeG()
{
      Gscore += 3
     guestSc.innerText = Gscore
}

function reset() 
{
    Hscore = 0
    homeSc.innerText = Hscore
    Gscore = 0
     guestSc.innerText = Gscore
}
