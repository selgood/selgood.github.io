console.log("Console Start")
/*Setup*/
function getname() {

}

/* Choice Set 1*/
function door() {
    setTimeout(function(){ document.getElementById("p2").innerHTML = "You open the door and look inside, only to find the room is completely empty apart from a single, anqitue lantern sitting in the middle of the room. It's turned off, and there are scratch marks around the table."; }, 3000);
    setTimeout(function(){ document.getElementById("map").src = "lamproom.png"; }, 3000);
    document.getElementById("coinsfloor").onclick = function() {coinpickup()};
    /* Turn on Lamp*/
    setTimeout(function(){ document.getElementById("lamp").innerHTML = "Turn the lantern on."; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").onclick = function() {lampon()}; }, 3000);
    /* Kick Lamp*/
    setTimeout(function(){ document.getElementById("button").innerHTML = "Kick the lantern over."; }, 3000);
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
    document.getElementById("lantern").onclick = function() {lanternpickup()};
    setTimeout(function(){ document.getElementById("p2").innerHTML = "You turn the lantern on and it lights up the room around you, exposing the beady, yellow eyes of dozens of gazes burning into you, darting around your form and around the room. Something darts at you to attack."; }, 3000);
    setTimeout(function(){ document.getElementById("button").innerHTML = "Attempt to Defend"; }, 3000);
    setTimeout(function(){ document.getElementById("button").onclick = function() {defend()}; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").innerHTML = "Attempt to Attack"; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").onclick = function() {attack()}; }, 3000);
}

function attack() {
    if (inventoryI.includes("Sword")){
        setTimeout(function(){ document.getElementById("p2").innerHTML = "As the creature lunges, you use the sword you found and retaliate, cutting the armoured beetle down swiftly."; }, 3000);
        setTimeout(function(){ document.getElementById("button").innerHTML = "Chase after the creature."; }, 3000);
        setTimeout(function(){ document.getElementById("button").onclick = function() {chase()}; }, 3000);
        setTimeout(function(){ document.getElementById("lamp").innerHTML = "Retreat and look for a way out."; }, 3000);
        setTimeout(function(){ document.getElementById("lamp").onclick = function() {wayout()}; }, 3000);
    } else if (inventoryI.includes("Shield")){
        setTimeout(function(){ document.getElementById("p2").innerHTML = "You dance backwards and raise your shield, holding it steady as the creature slams into it, dropping onto the floor and scurrying away quickly."; }, 3000);
        setTimeout(function(){ document.getElementById("button").innerHTML = "Chase after the creature."; }, 3000);
        setTimeout(function(){ document.getElementById("button").onclick = function() {chase()}; }, 3000);
        setTimeout(function(){ document.getElementById("lamp").innerHTML = "Retreat and look for a way out."; }, 3000);
        setTimeout(function(){ document.getElementById("lamp").onclick = function() {wayout()}; }, 3000);
    } else {
        setTimeout(function(){ document.getElementById("p2").innerHTML = "You raise your hands and attempt to fight back, throwing a punch to the air but missing spectacularly, a sudden gashing pain searing across your face, leaving your cheek dripping blood."; }, 3000);
        setTimeout(function(){ document.getElementById("button").innerHTML = "Chase after the creature."; }, 3000);
        setTimeout(function(){ document.getElementById("button").onclick = function() {chase()}; }, 3000);
        setTimeout(function(){ document.getElementById("lamp").innerHTML = "Retreat and look for a way out."; }, 3000);
        setTimeout(function(){ document.getElementById("lamp").onclick = function() {wayout()}; }, 3000);
    }

    
}

function defend() {
    if (inventoryI.includes("Sword")){
        setTimeout(function(){ document.getElementById("p2").innerHTML = "As the creature lunges, you use the sword you found and defend, you manage to defelct the incoming monster and injure it as it hits the ground, escaping quickly."; }, 3000);
        setTimeout(function(){ document.getElementById("button").innerHTML = "Chase after the creature."; }, 3000);
        setTimeout(function(){ document.getElementById("button").onclick = function() {chase()}; }, 3000);
        setTimeout(function(){ document.getElementById("lamp").innerHTML = "Retreat and look for a way out."; }, 3000);
        setTimeout(function(){ document.getElementById("lamp").onclick = function() {wayout()}; }, 3000);
    } else if (inventoryI.includes("Shield")){
        setTimeout(function(){ document.getElementById("p2").innerHTML = "You dance backwards and raise your shield, holding it steady as the creature slams into it, dropping onto the floor and scurrying away quickly."; }, 3000);
        setTimeout(function(){ document.getElementById("button").innerHTML = "Chase after the creature."; }, 3000);
        setTimeout(function(){ document.getElementById("button").onclick = function() {chase()}; }, 3000);
        setTimeout(function(){ document.getElementById("lamp").innerHTML = "Retreat and look for a way out."; }, 3000);
        setTimeout(function(){ document.getElementById("lamp").onclick = function() {wayout()}; }, 3000);
    } else {
        setTimeout(function(){ document.getElementById("p2").innerHTML = "You raise your hands and attempt to fight back, throwing a punch to the air but missing spectacularly, a sudden gashing pain searing across your face, leaving your cheek dripping blood."; }, 3000);
        setTimeout(function(){ document.getElementById("button").innerHTML = "Chase after the creature."; }, 3000);
        setTimeout(function(){ document.getElementById("button").onclick = function() {chase()}; }, 3000);
        setTimeout(function(){ document.getElementById("lamp").innerHTML = "Retreat and look for a way out."; }, 3000);
        setTimeout(function(){ document.getElementById("lamp").onclick = function() {wayiout()}; }, 3000);
    }

    
}

function chase() {
    if (inventoryI.includes("Sword")){
        setTimeout(function(){ document.getElementById("p2").innerHTML = "You dart after the creature, sword in hand, you manage to catch it before it sneaks away in the crack in the wall. You plunge your sword into the back of it, and there is a crunch and a pitched scree of pain. It falls limp, dead."; }, 3000);
        setTimeout(function(){ document.getElementById("button").innerHTML = "Inspect the creature."; }, 3000);
        setTimeout(function(){ document.getElementById("button").onclick = function() {inspectbeetle()}; }, 3000);
        setTimeout(function(){ document.getElementById("lamp").innerHTML = "Look for a way out."; }, 3000);
        setTimeout(function(){ document.getElementById("lamp").onclick = function() {wayout()}; }, 3000);
    } else if (inventoryI.includes("Shield")){
        setTimeout(function(){ document.getElementById("p2").innerHTML = "You attempt to chase after it, intent on banging your shield onto it to stop its escape. Just before it gets away from you, you break its back using the edge of the shield. It cries and goes limp."; }, 3000);
        setTimeout(function(){ document.getElementById("button").innerHTML = "Inspect the creature."; }, 3000);
        setTimeout(function(){ document.getElementById("button").onclick = function() {inspectbeetle()}; }, 3000);
        setTimeout(function(){ document.getElementById("lamp").innerHTML = "Look for a way out."; }, 3000);
        setTimeout(function(){ document.getElementById("lamp").onclick = function() {wayout()}; }, 3000);
    } else {
        setTimeout(function(){ document.getElementById("p2").innerHTML = "You jump after it once more, intent on revenge. With your hands outstretched you grab a hold of a smooth, shell like texture, you hold ont it, trying to keep a grip of the monster as it easily drags you across the floor. You feel yourself plunge back into darkness as the creature pulls you into a man-sized crack in the wall."; }, 3000);
        setTimeout(function(){ document.getElementById("button").innerHTML = "Don't let go."; }, 3000);
        setTimeout(function(){ document.getElementById("button").onclick = function() {hold()}; }, 3000);
        setTimeout(function(){ document.getElementById("lamp").innerHTML = "Let it go."; }, 3000);
        setTimeout(function(){ document.getElementById("lamp").onclick = function() {wayout()}; }, 3000);
    }
}

function wayout() {
    setTimeout(function(){ document.getElementById("p2").innerHTML = "You sit up and look around the now lit room- curiously you see a doorway at one end of the room with a dark hall. On one side of the wall is a man-sized hole."; }, 3000);
    setTimeout(function(){ document.getElementById("button").innerHTML = "Walk down the hall. WIP"; }, 3000);
    setTimeout(function(){ document.getElementById("button").onclick = function() {nothing()}; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").innerHTML = "Inspect the hole in the wall. WIP"; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").onclick = function() {nothing()}; }, 3000);
}

function inspectbeetle() {
    if (inventoryI.includes("Lantern")){
        setTimeout(function(){ document.getElementById("p2").innerHTML = "You look over it with the lantern, observing it to be a lesser undead beetle, swollen with cursed boils and a necromancer marking on the back of it's shell."; }, 3000);
    } else {
        setTimeout(function(){ document.getElementById("p2").innerHTML = "You lean down and look over the creature, inspecting it in the dim light. You can tell it's a large insect - a beetle of some sort, it's body has sores and boils under the armour, pushing it out. It looks sick."; }, 3000);
    }
    setTimeout(function(){ document.getElementById("button").innerHTML = "Inspect the room."; }, 3000);
    setTimeout(function(){ document.getElementById("button").onclick = function() {wayout()}; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").innerHTML = "Taste the beetle."; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").onclick = function() {taste()}; }, 3000);
}

/*BEETLE END*/
function taste(){
    setTimeout(function(){ document.getElementById("p2").innerHTML = "You stick your finger under the shell and mop up some goop, and taste the beetle. Without warning, a sense of impending doom hits you. You stand up to react, but immediately collapse. Poisoned, you die."; }, 3000);
    setTimeout(function(){ document.getElementById("button").innerHTML = "Start Again...?"; }, 3000);
    setTimeout(function(){ document.getElementById("button").onclick = function() {restart()}; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").innerHTML = "Game Over, why did you think that was a good idea?"; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").onclick = function() {restart()}; }, 3000);

}

/*UNKOWN END*/
function hold(){
    setTimeout(function(){ document.getElementById("p2").innerHTML = "You hold on tight to the creature, it drags you deep into the hole it scurried into. Swiftly, you'd feel yourself twist and turn into the dug out tunnel. Soon you'd feel you come into an opening, letting go of the creature, it scurries away. You stand, looking around."; }, 3000);
    setTimeout(function(){ document.getElementById("button").innerHTML = "Start Again."; }, 3000);
    setTimeout(function(){ document.getElementById("button").onclick = function() {restart()}; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").innerHTML = "Game Over, the story does not end here forever, but only for now."; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").onclick = function() {restart()}; }, 3000);

}

/* Kick Lamp (END)*/
function kicklamp() {
    setTimeout(function(){ document.getElementById("p2").innerHTML = "You kick the lamp over and it breaks, a quiet hiss could be heard as the bulb smashes across the scratched floor, almost as if the light had been containing something, and you'd just let it go free. The room goes dark, you cannot find a way out."; }, 3000);
    setTimeout(function(){ document.getElementById("button").innerHTML = "Start Again?"; }, 3000);
    setTimeout(function(){ document.getElementById("button").onclick = function() {restart()}; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").innerHTML = "Game Over"; }, 3000);
    setTimeout(function(){ document.getElementById("lamp").onclick = function() {restart()}; }, 3000);
}

/*Restart*/
function restart() {
    location.reload()
}
function nothing(){

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
/* PLAYER STATS */
var playername=""
/*Set name and start audio*/
function setname() {
    var playername=document.getElementById("nametext").value;
    document.getElementById("namepos").innerHTML = playername;
    var auds = document.getElementById("ambience");
    auds.play();
    console.log(playername)
}

/*Inventory*/
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
    document.getElementById("chest1").onclick = function() {nothing()};
    var number = 0
    number = Math.floor(Math.random() * possinv.length)
    console.log(number)
    var item = possinv[number] 
    window.alert("You found "+ item +", item was added to your inventory.")
    inventoryI.push(item);
    
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

function coinpickup(){
    document.getElementById("coinsfloor").onclick = function() {nothing()};
    window.alert("You found some gold! Item was added to inventory.")
    inventoryI.push("Gold")
}

function lanternpickup(){
    document.getElementById("lantern").onclick = function() {nothing()};
    window.alert("You picked up the lit lantern, you attach it to your utility belt. You can now see in dark spaces.")
    inventoryI.push("Lantern")
}


function clearinv(){
    localStorage.clear();
}