var pkg={
  goal: "",
  bodytype:"",
  activity:""
}

var storepkg= localStorage.getItem("user");
if (storepkg){
  pkg=JSON.parse(storepkg);
}

var handler={
  set:function(obj,props,value){
    
  }
}

function Changegoal(goal){
  pkg.goal = goal;
  save();
  location.href="APP 4.html";
}



function save(){
localStorage.setItem("user",JSON.stringify(pkg));

}
console.log(pkg);

function ShowInfoUI(){
  document.querySelector("#description1").innerHTML = pkg.goal;
}

function gotoapp2(){
    document.getElementById("app1").style.marginLeft = ("-100vw");
    document.getElementById("app1").style.WebkitTransition = "all 0.7s";
    document.getElementById("app2").style.marginLeft = ("0vw");
    document.getElementById("app2").style.WebkitTransition = "all 0.7s";
}
function gotoapp1(){
    document.getElementById("app1").style.marginLeft = ("0vw");
    document.getElementById("app1").style.WebkitTransition = "all 0.7s";
    document.getElementById("app2").style.marginLeft = ("100vw");
    document.getElementById("app2").style.WebkitTransition = "all 0.7s";
}
function gotoapp3(){
    document.getElementById("app2").style.marginLeft = ("-100vw");
    document.getElementById("app2").style.WebkitTransition = "all 0.7s";
    document.getElementById("app3").style.marginLeft = ("0vw");
    document.getElementById("app3").style.WebkitTransition = "all 0.7s";
}
function backtoapp2(){
    document.getElementById("app2").style.marginLeft = ("0vw");
    document.getElementById("app2").style.WebkitTransition = "all 0.7s";
    document.getElementById("app3").style.marginLeft = ("100vw");
    document.getElementById("app3").style.WebkitTransition = "all 0.7s";
}



