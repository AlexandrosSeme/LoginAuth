

function signUp (e) {
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;      


    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() && 
            data.lname.toLowerCase() == lname.toLowerCase()
        );

    if(!exist){
        formData.push({ fname, lname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
    }

    e.preventDefault();
}

function signIn(e) {    
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    //Tsiri/
   let formData = JSON.parse(localStorage.getItem('formData')) || [];
//debugger    

    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    
    if(!exist){
        alert("Incorrect login credentials");
    }
        else{
//            alert('Login Succesfull');
                /*
                function myFunction() {
                    let fnameInput = document.querySelector("#fname");
                    let accountOutput =document.querySelector ("#account");
                    accountOutput.innerHTML = "Test";
                }
                */

                      
                
        //let current_user = (localStorage.getItem('formData')).filter(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd)[0]
        //localStorage.setItem('fname', current_user.$fname);
             location.href = "./index.html"; 
             alert("Success Login");    
             
             

    }  
    e.preventDefault();
}


function card1(e) {
    document.getElementById("product-info").innerHTML = "<b>Product1</b><br> insert text From JavaScript This is the first product directly from China";
}

function card2(e) {
    document.getElementById("product-info").innerHTML = "<b>Product2</b><br>insert text From JavaScript onsectetur adipiscing elit, sed do eiusmod tempo";
}

function card3(){
    document.getElementById("product-info").innerHTML = "<b>Product3</b><br>insert text From JavaScript skadjfhakjfbhdbfdshfbdonsectetur adipiscing elit, sed do eiusmod tempo";
}

function card4(){
    document.getElementById("product-info").innerHTML = "<b>Product4</b><br>insert text From JavaScript Perfetct Choise for you";
}

function card5(){
    document.getElementById("product-info").innerHTML = "<b>Product5</b><br>insert text From JavaScript επίσης μπορείς να εισάγεις και Ελληνικό κείμενο";
}

function card6(){
    document.getElementById("product-info").innerHTML = "<b>Product6</b><br>insert text From JavaScript Add more Text Here";
}



function account(e) {
    
    document.getElementById("account").innerHTML = formData.fname;
   
}






















