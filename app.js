var pages=["home","about","interact"];
var num =0;
function createNav(){
    var nav =document.createElement("nav");
        createButton(pages[0]);
        createButton(pages[1]);
        createButton(pages[2]);

    document.body.appendChild(nav);

    function createButton(pg){
        var butt = document.createElement("button");
        butt.innerHTML=pg;
        butt.addEventListener("click",function(){
            navigate(pg);
        })
        nav.appendChild(butt);

    }
}

function createWrapper(){
    var wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);

}

function navigate(pg) {
    if (pg === "home"){
        homePage()
    }else if(pg=== "about"){
        aboutPage()
    }else{
        interactPage()
}
}

function homePage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML="Home";
    wrapper.appendChild(header);

}

function aboutPage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML="About Me";
    var name = document.createElement("h3");
    name.innerHTML="Jowi";
    wrapper.appendChild(header);
    wrapper.appendChild(name);

}

function interactPage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header=document.createElement("h1");
    header.innerHTML="Interact";
    var counter = document.createElement("button");
    counter.classList.add("counter");
    counter.innerHTML="Increase counter";
    var number = document.createElement("p");
    number.innerHTML= num;
    counter.addEventListener("click",function(){
        number.innerHTML="";
        num = (num + 1);
        number.innerHTML = num;
    })
    wrapper.appendChild(header);
    wrapper.appendChild(counter);
    wrapper.appendChild(number);

}

createNav();
createWrapper();
navigate("home");