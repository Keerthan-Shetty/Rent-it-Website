// preloader

let loader = document.getElementById("preloader");

window.addEventListener("load",function(){
    loader.style.display= "none";    
});

// phase1 location,time,date is noted

function timing(){
    let pickuplocation = document.getElementById('loca').value;
    console.log("Pickup-location : " + pickuplocation );

    let pickupdate = document.getElementById('loca1').value;
    console.log("Pickup-date : " + pickupdate );

    let pickuptime = document.getElementById('loca2').value;
    console.log("Pickup-time : " + pickuptime );

    //drop description

    let dropLocation = document.getElementById('loca3').value;
    console.log("Droppingoff-location : " + dropLocation );

    let dropDate = document.getElementById('loca4').value;
    console.log("Droppingoff-date : " + dropDate );

    let dropTime = document.getElementById('loca5').value;
    console.log("Droppingoff-time : " + dropTime );
}

// part6 begins here with location,date & category

function category(){
    let pickuplocation = document.getElementById('loca6').value;
    console.log("Pickup-location : " + pickuplocation );

    let pickupdate = document.getElementById('loca7').value;
    console.log("Pickup-date : " + pickupdate );

    let categorytype = document.querySelector('#loca8').value;
    console.log("Car Category : " + categorytype );
}

// part11 form begins here for sending message

function sendMessage(){
    let personName = document.getElementById('name').value;
    console.log("Name : " + personName );

    let email = document.getElementById('email').value;
    console.log("E-mail : " + email );

    let subject = document.getElementById('subject').value;
    console.log("Subject : " + subject );

    let message = document.getElementById('message').value;
    console.log("Message : " + message );
}   

// login form page using login button

//openpage

function openlogin(){
    document.getElementById('loginform').style.display = 'block';
}

//close page

function closeForm(){
    document.getElementById('loginform').style.display = 'none';
}

//  login details

function logindetails(){

    let userName = document.getElementById('username').value;
    console.log("UserName"+ userName);

    let password = document.getElementById('password').value;
    console.log("Password" + password);

}

// see posts

// open post from button
function openpost(){
    document.getElementById('see-content').style.display = 'block';
}

// close using exit button

function closepost(){
    document.getElementById('see-content').style.display = 'none';
}


// search bar

function searchcar(){
    let filter= document.getElementById('search').value.toUpperCase();
    let brand= document.querySelectorAll(".car1");
    let len = document.getElementsByTagName('h5');

    for(let i=0 ; i <= len.length ; i++){
        let car = brand[i].getElementsByTagName('h5')[0];

        let value = car.innerHTML || car.innerText || car.textContent;

        if(value.toUpperCase().indexOf(filter) > -1){
          brand[i].style.display = "";
        }else {
          brand[i].style.display = 'none'; 
            
        }
    }
}












