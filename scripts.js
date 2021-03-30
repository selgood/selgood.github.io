console.log("Console Start")
/*Setup*/
function getname() {

}

/* Choice Set 1*/
function door() {
    setTimeout(function(){ document.getElementById("p2").innerHTML = "You open the door and look inside, only to find the room is completely empty apart from a single, anqitue lamp sitting in the middle of the room. It's turned off, and there are scratch marks around the table."; }, 3000);
    setTimeout(function(){ document.getElementById("map").src = "mappy.jpg"; }, 3000);
    /* Turn on Lamp*/
    setTimeout(function(){ document.getElementById("lamp").innerHTML = "Turn the lamp on."; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").onclick = function() {lampon()}; }, 3000);
    /* Kick Lamp*/
    setTimeout(function(){ document.getElementById("button").innerHTML = "Kick the lamp over."; }, 3000);
    setTimeout(function(){ document.getElementById("button").onclick = function() {kicklamp()}; }, 3000);
}

/* WALKING AWAY ROUTE*/
/* Walk Away*/
function walkaway() {
    setTimeout(function(){ document.getElementById("p2").innerHTML = "You turn and walk away"; }, 3000);
    setTimeout(function(){ document.getElementById("button").innerHTML = "You left"; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").innerHTML = "Its over"; }, 3000);
}
/* LAMP ROUTE*/
/* Turn on Lamp*/
function lampon() {
    setTimeout(function(){ document.getElementById("p2").innerHTML = "You turn the lamp on and it lights up the room around you, exposing the beady, yellow eyes of dozens of gazes burning into you, darting around your form and around the room."; }, 3000);
    setTimeout(function(){ document.getElementById("button").innerHTML = "Start Again?"; }, 3000);
    setTimeout(function(){ document.getElementById("button").onclick = function() {restart()}; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").innerHTML = "Game Over"; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").onclick = function() {restart()}; }, 3000);
}
/* Kick Lamp*/
function kicklamp() {
    setTimeout(function(){ document.getElementById("p2").innerHTML = "You kick the lamp over and it breaks, a quiet hiss could be heard as the bulb smashes across the scratched floor, almost as if the light had been containing something, and you'd just let it go free."; }, 3000);
    setTimeout(function(){ document.getElementById("button").innerHTML = "Start Again?"; }, 3000);
    setTimeout(function(){ document.getElementById("button").onclick = function() {restart()}; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").innerHTML = "Game Over"; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").onclick = function() {restart()}; }, 3000);
}

/*Restart*/
function restart() {
    location.reload()
}


/*Set Small Font*/
function smallfont() {
    document.getElementById("p2").style.fontSize="large"
}

/*Set Medium Font*/
function medfont() {
    document.getElementById("p2").style.fontSize="x-large"
}

/*Set Large Font*/
function largefont() {
    document.getElementById("p2").style.fontSize="xx-large"
    window.localStorage.setItem("gamefont", "xx-large")
    console.log("Hello")
}

/*clear local storage*/
function clearstor() {
    localStorage.clear()
    location.reload()
}
var playername=""
/*Set name and start audio*/
function setname() {
    var playername=document.getElementById("nametext").value;
    document.getElementById("namepos").innerHTML = playername;
    var auds = document.getElementById("ambience");
    auds.play();
    console.log(playername)
}

/*Quick toggle hide/show*/
function abouttog() {
    var state = document.getElementById("aboutbox");
    if (state.style.display === "none") {
        state.style.display = "block";
    } else {
        state.style.display = "none";

    }
}

/*Fading in and out scripts, templates from https://www.w3schools.com/jquery/jquery_fade.asp*/
$(document).ready(function(){
    console.log(window.localStorage.getItem("gamefont"))
    document.getElementById("p2").style.fontSize=window.localStorage.getItem("gamefont")
    $("#button").click(function(){
        $("#div3").fadeOut(3000);
        $("#div3").fadeIn(3000).delay(3100);
    });
    });
    $(document).ready(function(){
        $("#lamp").click(function(){
            $("#div3").fadeOut(3000);
            $("#div3").fadeIn(3000).delay(3100);
        });
    });
    $(document).ready(function(){
        $("#start").click(function(){
            $("#mainmenu").fadeOut(3000)
            $("#nameinput").fadeIn(3000).delay(3100);
            $(".navbar").fadeIn(3000).delay(3100);
    });
    });
    $(document).ready(function(){
        $("#namebut").click(function(){
            $("#nameinput").fadeOut(1)
            $("#div3").fadeIn(3000).delay(3100);
            $(".navbar").fadeIn(3000).delay(3100);
    });
    });
$(document).ready(function(){
    $("#div3").fadeOut(1)
    $(".navbar").fadeOut(1)
});

$(document).ready(function(){
    $("#optionsmenu").fadeOut(1)
    $(".optionsmenu").fadeOut(1)
});

$(document).ready(function(){
    $("#optbut").click(function(){
        $("#optionsmenu").fadeIn(1)
        $(".optionsmenu").fadeIn(1)
});
});

$(document).ready(function(){
    $("#optbutclose").click(function(){
        $("#optionsmenu").fadeOut(1)
        $(".optionsmenu").fadeOut(1)
});
});

/*hide div 3*/
$(document).ready(function(){
    $("#div3").fadeOut(1)
    $(".div3").fadeOut(1)
});

$(document).ready(function(){
    $("#nameinput").fadeOut(1)
    $(".nameinput").fadeOut(1)
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content
https://www.w3schools.com/howto/howto_js_dropdown.asp */
function dropfunc() {
    document.getElementById("bardrop").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 



/* map testing*/
/*var map = document.getElementById('Map');
map.addEventListener('click', eXFunction, false);*/

function eXFunction(e) {
  if (e.target !== e.currentTarget) {
    var clickedBtn = e.target.id;
    alert("Button: " + clickedBtn);
  }
  e.stopPropagation();
}

/*Inventory System*/
console.log("Woop")
var item = "none"
window.inventoryI = [

]
var possinv = [
    "Sword",
    "Shield",
    "Bones",
    "Gold"
]
console.log(window.inventoryI)
function randomcol(number){
    var number = 0
    number = Math.floor(Math.random() * possinv.length)
    console.log(number)
    var item = possinv[number] 
    window.alert("You found "+ item +", item was added to your inventory.")
    inventoryI.push(item);
    console.log(inventoryI)
}

function inventory(){
    console.log(inventoryI)
    window.alert("You have " + inventoryI + " in your inventory." )
    localStorage.setItem("items", inventoryI)
}

function getinv(){
    var inventoryI = localStorage.getItem("items");
    window.alert("You have " + inventoryI + " in your inventory." )
}

function clearinv(){
    localStorage.clear();
}