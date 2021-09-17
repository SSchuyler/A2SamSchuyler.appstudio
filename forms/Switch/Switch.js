let name = prompt('What is your name?')
let state = prompt('Do you live in NE or FL?')
let temp = prompt('What is the temperature outside in Fahrenheit?')

let message = ['wear a warm coat, hat, scarf and gloves.', 'wear a warm coat but you will not need a hat, scarf or gloves.', 'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 'wear a warm coat, hat and gloves. Maybe a scarf too.']

switch (state && temp) {
   case (state == "NE" && temp < 32):
       console.log(`${name}, ${message[0]}`)
       break;
    case (state == "NE" && temp <= 50 && temp >= 32):
       console.log(`${name}, ${message[1]}`)
       break;
    case (state == "FL" && temp >= 32 && temp <= 50):
       console.log(`${name}, ${message[2]}`)
       break;
    case (state == "FL" && temp <= 70):
       console.log(`${name}, ${message[3]}`)
       break;
    default:
        console.log('You typed something in wrong, try again');
}