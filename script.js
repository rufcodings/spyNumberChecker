let button = document.querySelector("#inputandbutton button");

button.addEventListener ("click", () => {

    let input = document.querySelector("#input").value;

    var mul = 1;
    var add = 0;

    for(let element of input) {

        var add = add + element * mul;
        element++;
    }

    for(let element of input) {

        var mul = element * mul;
        element++;
    }

    if(add === mul){
        let newPara = document.createElement("p");
        newPara.textContent = `${input} is a Spy Number.`;
        console.log(newPara);
        let div = document.querySelector("#inputandbutton").append(newPara);
        newPara.style.fontSize = "20px";
        newPara.style.color = "green";
        newPara.style.fontWeight = "600";
    }

    else{
        let newPara = document.createElement("p");
        newPara.textContent = `${input} is not a Spy Number.`;
        console.log(newPara);
        let div = document.querySelector("#inputandbutton").append(newPara);
        newPara.style.fontSize = "20px";
        newPara.style.color = "#ce1818";
        newPara.style.fontWeight = "600";
    }
});