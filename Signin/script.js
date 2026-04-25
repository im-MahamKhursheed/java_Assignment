const username= prompt("Username", "Enter your username")
const password=prompt("Password", "Enter your password")

if(username==="admin"){
    if(password==1234){
        alert("Welcome admin")
    }
    else{
        alert("Wrong password")
    }
}
else if(username==="teacher") {
    if(password==1111){
        alert("Welcome teacher")
    }
    else{
        alert("Wrong password")
    }
}
else if(username==="student"){
    if(password==2222){
        alert("Welcome student")
    }
    else{
        alert("Wrong password")
    }
}
else{
    alert("Invalid credentials")
}