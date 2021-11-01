var responseDiv=document.body.querySelector(".response");
var pages = ["Home", "View", "About"];
var list = [];

function createNav() {
  var nav = document.createElement("nav");
  createButton(pages[0]);
  createButton(pages[1]);
  createButton(pages[2]);
  document.body.appendChild(nav);

  function createButton(pg) {
    var btn = document.createElement("button");
    btn.innerHTML = pg;
    btn.addEventListener("click", function () {
      navigate(pg);
    })
    nav.appendChild(btn);
  }
}

function createSaber(){
  var saber = document.createElement("div");
  saber.classList.add("saber");
  document.body.appendChild(saber);
}

function navigate(pg){
  if (pg === "Home"){
    homePg();
  }else if(pg === "About"){
    aboutPg();
  }else if(pg === "View"){
    viewPg();
  }
}

function homePg(){
  var saber = document.body.querySelector(".saber");
  saber.innerHTML ="";
  var header = document.createElement("h1");
  header.innerHTML = "Home Page";
  saber.appendChild(header);
}

function aboutPg(){
  var saber = document.body.querySelector(".saber");
  saber.innerHTML = "";
  var header = document.createElement("h1");
  var info = document.createElement("h3");
  header.innerHTML = "About Page";
  info.innerHTML = "This project allows the correct user to take notes";
  saber.appendChild(header);
  saber.appendChild(info);
}

function viewPg(){
  var textValue = document.body.querySelector(".input").value;
  var numValue = document.body.querySelector(".numb").value;
  var saber = document.body.querySelector(".saber");
  saber.innerHTML = "";
  var header = document.createElement("h1")
  header.innerHTML = "View Page";
  list.push(textValue);
  list.push(numValue);
  renderList();
}

function renderList(){
  var itemsDiv = document.body.querySelector(".items");
  itemsDiv.innerHTML = "";
  for (var i=0; i<list.length; i++){
    var ele = document.createElement("div");
    ele.innerHTML = list[i];
    itemsDiv.appendChild(ele);
  }

}

document.body.querySelector(".btn").addEventListener("click", function (){
  var textValue = document.body.querySelector(".input").value;


  if (textValue === "coolStudent123"){
    responseDiv.innerHTML = "";
    createNav();
    createSaber();
    navigate("Home");
  }else {
    responseDiv.innerHTML = "Wrong Username";
  }
})


