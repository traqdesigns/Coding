let inputColor = document.getElementById('hexInput');

const isValidHex = (hex) => {

    if (!hex)  return false; 
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

//console log test

console.log(isValidHex('123'));
console.log(isValidHex('123456'));
console.log(isValidHex('#123'));    
console.log(isValidHex('#123456'));