let hexInput = document.getElementById('hexInput');
let inputcolor = document.getElementById('inputColor');
let slider = document.getElementById('slider');
let sliderText = document.getElementById('sliderText');
hexInput.addEventListener('keyup', () => {
    const hex = hexInput.value;
    if (!isValidHex(hex)) return;

    const strippedHex = hex.replace('#', '');
    inputcolor.style.backgroundColor = '#' + strippedHex;



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

    const firstPair = "0" + r.toString(16).slice(-2)
    const secondPair = "0" + r.toString(16).slice(-2)
    const thirdPair = "0" + r.toString(16).slice(-2)
  

    if (firstPair.length === 1) {

        r = '0' + r;

    }

    if (secondPair.length === 1) {
            
            g = '0' + g;
    
        }

        if (thirdPair.length === 1) {
            
            b = '0' + b;
    
        }   


    return '#' + firstPair + secondPair + thirdPair;
}



slider.addEventListener('input', () => {

   sliderText.textContent =  slider.value + '%';
})
