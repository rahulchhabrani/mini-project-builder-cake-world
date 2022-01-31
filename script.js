/*Fill your code */
var itemlist = document.querySelectorAll(".items");
var price = 0;


var ingredients = {
    chocolate: 300,
    strawberry: 100,
    butterscotch: 200,
    vannilla: 250,
    redvelvet: 350
};


var state = {
    chocolate: true,
    strawberry: true,
    butterscotch: true,
    vannilla: true,
    redvelvet: true
};

function renderAll() {
    renderchocolate();
    renderstrawberry();
    renderbutterscotch();
    rendervannilla();
    renderredvelvet();
    // renderButtons();
    // renderIngredientsBoard();
}

function renderchocolate() {
    let chocolate = document.querySelector("#layer5");

    if (state.chocolate) {
        chocolate.style.visibility = "visible";
        itemlist[0].innerHTML = "Chocolate--300";
        chocolate.style.height = "30px";
        document.querySelector(".btn-chocolate").style.boxShadow = "0 9px #999";
    } else {
        chocolate.style.visibility = "hidden";
        chocolate.style.height = "0px";
        document.querySelector(".btn-chocolate").style.boxShadow = "none";
        itemlist[0].innerHTML = "";
    }
}

function renderstrawberry() {

    let strawberry = document.querySelector("#layer4");

    if (state.strawberry) {
        strawberry.style.visibility = "visible";
        strawberry.style.height = "30px";
        itemlist[1].innerHTML = "Strawberry--100";
        document.querySelector(".btn-strawberry").style.boxShadow = "0 9px #999";
    } else {
        strawberry.style.visibility = "hidden";
        strawberry.style.height = "0px";
        document.querySelector(".btn-strawberry").style.boxShadow = "none";
        itemlist[1].innerHTML = "";
    }
}

function renderbutterscotch() {

    let butterscotch = document.querySelector("#layer3");

    if (state.butterscotch) {
        butterscotch.style.visibility = "visible";
        butterscotch.style.height = "30px";
        itemlist[2].innerHTML = "Butterscotch--200";
        document.querySelector(".btn-butterscotch").style.boxShadow = "0 9px #999";
    } else {
        butterscotch.style.visibility = "hidden";
        butterscotch.style.height = "0px";
        document.querySelector(".btn-butterscotch").style.boxShadow = "none";
        itemlist[2].innerHTML = "";
    }
}

function rendervannilla() {

    let vannilla = document.querySelector("#layer2");

    if (state.vannilla) {
        vannilla.style.visibility = "visible";
        vannilla.style.height = "30px";
        itemlist[3].innerHTML = "Vannilla--250";
        document.querySelector(".btn-vannilla").style.boxShadow = "0 9px #999";
    } else {
        vannilla.style.visibility = "hidden";
        vannilla.style.height = "0px";
        document.querySelector(".btn-vannilla").style.boxShadow = "none";
        itemlist[3].innerHTML = "";
    }

}

function renderredvelvet() {
    let redvelvet = document.querySelector("#layer1");

    if (state.redvelvet) {
        redvelvet.style.visibility = "visible";
        redvelvet.style.height = "30px";
        itemlist[4].innerHTML = "Red Velvet--350";
        document.querySelector(".btn-redvelvet").style.boxShadow = "0 9px #999";

    } else {
        redvelvet.style.visibility = "hidden";
        redvelvet.style.height = "0px";
        document.querySelector(".btn-redvelvet").style.boxShadow = "none";

        itemlist[4].innerHTML = "";
    }

}

function renderPrice() {
    price = 0;
    if (state.chocolate) {
        price = price + ingredients["chocolate"];
    }
    if (state.vannilla) {
        price = price + ingredients["vannilla"];
    }
    if (state.strawberry) {
        price = price + ingredients["strawberry"];
    }
    if (state.butterscotch) {
        price = price + ingredients["butterscotch"];
    }
    if (state.redvelvet) {
        price = price + ingredients["redvelvet"];
    }
    document.querySelector(".price").innerHTML = "Total ---- " + price;
}

document.querySelector(".btn-chocolate").onclick = function() {
    state.chocolate = !state.chocolate;
    renderAll();
};


document.querySelector(".btn-strawberry").onclick = function() {
    state.strawberry = !state.strawberry;
    renderAll();
};


document.querySelector(".btn-butterscotch").onclick = function() {
    state.butterscotch = !state.butterscotch;
    renderAll();
};


document.querySelector(".btn-vannilla").onclick = function() {
    state.vannilla = !state.vannilla;
    renderAll();
};



document.querySelector(".btn-redvelvet").onclick = function() {
    state.redvelvet = !state.redvelvet;
    renderAll();
};

document.querySelector(".btn-buy").onclick = function() {
    renderPrice();
}