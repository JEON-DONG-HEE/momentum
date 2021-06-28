const hellos = document.querySelector('div:nth-child(1) .hello a');

// console.log(hellos.style.color);
// hellos.style.color = "lightgreen";
// console.log(hellos.style.color);



function handleChangeColor() {
    const currentColor = hellos.style.color;
    let newColor;
    if (currentColor === "lightgreen") {
        newColor = "tomato";
    } else {
        newColor = "lightgreen";
    }
    hellos.style.color = newColor;
};




hellos.addEventListener("click", handleChangeColor);


