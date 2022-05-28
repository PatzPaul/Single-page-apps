let firstName = 'patz';
let lastName = 'peter';
//Template String an alternative to string concatenation
//node console.log('Your Full Name is ' + firstName + ' ' + lastName);


const greet1 = function(sei,sei2){
  return `Hello There,${sei} ${sei2}`;
}

console.log(greet1('johan','gudmonsen'));

const person =(firstName,lastName) =>(
  {
  first:firstName,
  last:lastName
});


const greet2 = (seif,seif2) => {

  if (seif && seif2) {
    return `Hello there, ${seif},${seif2}`;
  }else{
    throw new Error('Both Names Required for greetings');

  }

} //`Hello There,${seif} ${seif2}`;
console.log(greet2('johann','Mcflurry'));
console.log(person('johann','Guiness'));


console.log(`Your Full Name is: ${firstName} ${lastName}`);