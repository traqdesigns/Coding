let hexInput = document.getElementById('hexInput');
let inputcolor = document.getElementById('inputColor');
let slider = document.getElementById('slider');
let sliderText = document.getElementById('sliderText');
let alteredcolor = document.getElementById('alteredColor');
const alteredColorText = document.getElementById('alteredColorText');
const body = document.querySelector('body');

const lightenText = document.getElementById('lightenText');
const darkenText = document.getElementById('darkenText');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {

    if (toggleButton.classList.contains('toggled')) {
        toggleButton.classList.remove('toggled');
        darkenText.classList.add('unselected');
        lightenText.classList.remove('unselected');
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        toggleButton.style.backgroundColor = 'white';

    } else {
        toggleButton.classList.add('toggled');
        lightenText.classList.add('unselected');
        darkenText.classList.remove('unselected');
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        toggleButton.style.backgroundColor = 'black';
    }

    slider.value = 0;
    sliderText.textContent = slider.value + '%';
    alteredcolor.style.backgroundColor = hexInput.value;
    alteredColorText.innerText = `Swifted Color: ${hexInput.value}`;

    reset();


})

hexInput.addEventListener('keyup', () => {
    const hex = hexInput.value;
    if (!isValidHex(hex)) return;

    const strippedHex = hex.replace('#', '');
    inputcolor.style.backgroundColor = '#' + strippedHex;

    reset();

})

const isValidHex = (hex) => {

    if (!hex) return false;
    //stripping hastag
    if (hex[0] === '#') hex = hex.replace('#', '');
    //checking if it is a valid hex
    //provide valid character array
    //loop through the hex string and check if it is a valid character
    //if not return false
    const validCharacters = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    for (let i = 0; i < hex.length; i++) {
        if (!validCharacters.includes(hex[i].toLowerCase())) return false;
    }
    return hex.length === 3 || hex.length === 6;


}

const hexToRGB = (hex) => {
    //checking if it is a valid hex
    if (!isValidHex(hex)) return null;
    let strippedHex = hex.replace('#', '');

    //if the hex is 3 characters long, double up each
    if (strippedHex.length === 3) {
        strippedHex = strippedHex[0] + strippedHex[0] + strippedHex[1] + strippedHex[1] + strippedHex[2] + strippedHex[2];
    }

    const r = parseInt(strippedHex.substring(0, 2), 16);
    const g = parseInt(strippedHex.substring(2, 4), 16);
    const b = parseInt(strippedHex.substring(4, 6), 16);

    return { r, g, b };
}


convertRGBToHex = (r, g, b) => {

    const firstPair = ("0" + r.toString(16)).slice(-2); 
    const secondPair = ("0" + g.toString(16)).slice(-2); 
    const thirdPair = ("0" + b.toString(16)).slice(-2); 

  const hex = '#' + firstPair + secondPair + thirdPair;
    return hex;
}




const alterColor = (hex, percentage) => {

    hexToRGB(hex)
    //grabbing indivsual r, g, b values from the hex
    const { r, g, b } = hexToRGB(hex);
    const amount = Math.floor((percentage / 100) * 255);

    const newR = Math.max(0, Math.min(r + amount, 255));
    const newG = Math.max(0, Math.min(g + amount, 255));
    const newB = Math.max(0, Math.min(b + amount, 255));

    console.log(newR, newG, newB);

    return convertRGBToHex(newR, newG, newB);
    ;

}


slider.addEventListener('input', () => {

    if (!isValidHex(hexInput.value)) return;

    sliderText.textContent = slider.value + '%';

    //Calculate the appropriate value for color alteration 

    const valueAddition = toggleButton.classList.contains('toggled') ? -slider.value : slider.value;

    //taking value of slider and passing into alterColor function along with hexInput value from input
    const alteredHex = alterColor(hexInput.value, valueAddition);
    alteredcolor.style.backgroundColor = alteredHex;

    console.log(alteredHex);
    console.log(alteredColor.backgroundColor);
    alteredColorText.innerText = `Swifted Color: ${alteredHex}`;


    //check if valid hex 'hexInput'
    //get altered hex 
    //updated the altered color 
})

const reset = () => {  
slider.value = 0;
sliderText.textContent = slider.value + '%';
alteredColor.style.backgroundColor = hexInput.value;
alteredColorText.innerText = `Swifted: ${hexInput.value}`;   
}




