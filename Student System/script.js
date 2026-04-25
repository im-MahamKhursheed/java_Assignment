const name=prompt("Name", "Enter your name: ")
const age=prompt("Age", "Enter your age: ")
const city=prompt("city", "Enter your city: ")

if(age<18){
    alert(`Hello ${name}, you are ${age} years old and living in ${city}. You are a minor.`)
    console.log(`Hello ${name}, you are ${age} years old and living in ${city}. You are a minor.`)
}
else{
    alert(`Hello ${name}, you are ${age} years old and living in ${city}. You are an adult.`)
    console.log(`Hello ${name}, you are ${age} years old and living in ${city}. You are an adult.`)
}
