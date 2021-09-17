/*
Name the first program form ifElse. Use if/else statements - no switch. 
Name the second program form switch, Use a switch statement. 
Use variables to hold these data: 
> the users' first name
> the users' state (2 letters)
> the users' temperature (number) in Fahrenheit
> an array that is holding all of the messages
All variable names must be camelcase (likeThis) and reflect what they are holding.
All messages are stored in an array named 'messages', one per location. 
All output must be via console, not alerts, using template literals. 
All output should be nicely formatted and addressed to the user:
eg. Mary, blah blah blah.
Below are the messages to output based on the state and temperature received from the user.
Messages cannot be hard-coded (that is, typed into the program where needed for output).

State	Temperature	Message
NE	under 32 degrees	wear a warm coat, hat, scarf and gloves.
NE	between 32 and 50 degrees	wear a warm coat but you won't need a hat, scarf or gloves.
FL	between 32 and 50 degrees	wear your warmest coat, a warm hat, a scarf, and warm gloves.
FL	between 50 and 70	wear a warm coat, hat and gloves. Maybe a scarf too.
*/

/*
let name = prompt('What is your name?')
let state = prompt('Do you live in NE or FL?')
let temp = prompt('What is the temperature outside in Fahrenheit?')

let message = ['wear a warm coat, hat, scarf and gloves.', 'wear a warm coat but you will not need a hat, scarf or gloves.', 'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 'wear a warm coat, hat and gloves. Maybe a scarf too.']

if (state == "NE" && temp < 32){
  console.log(`${name}, ${message[0]}`)
  }
else if (state == "NE" && temp <= 50 && temp >= 32){
  console.log(`${name}, ${message[1]}`)
}
else if (state == "FL" && temp >= 32 && temp <= 50){
  console.log(`${name}, ${message[2]}`)
}
else if (state == "FL" && temp <= 70){
  console.log(`${name}, ${message[3]}`)
}
else{
  console.log('You typed something in wrong, try again')
}
*/