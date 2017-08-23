/********************************************************************************************/
/************************************* Gegevens Jodie & Niel  ********************************/
/********************************************************************************************/

var objPeopleProfile = [
    { 
		userid: "Jodie",
		firstName: "Jodie",
        Name: "De Greef",
        address: "Molenstraat 7 1750 Lennik",
        sex: "Female",
        email: "jodiedegreef@gmail.com"
	},

	{ 
		userid: "Niel",
		firstName: "Niel",
        Name: "Duquesne",
        address: "Berkenlaan 4 1740 Ternat",
        sex: "Male",
        email: "nielduquesne@gmail.com"
	}
	
]

/********************************************************************************************/
/************************************* Algemeen  ********************************/
/********************************************************************************************/

var infoKader = document.getElementById("login_register");
infoKader.style.display = "none";

if (localStorage) {
  // LocalStorage is supported!
} else {
  // No support. Use a fallback such as browser cookies or store on the server.
}


/********************************************************************************************/
/************************************* Registreren - Registerknop  ********************************/
/********************************************************************************************/

/* Login pop-up box bij drukken op loginknop */
// Get the register_var
var register_var = document.getElementById('registerPopUp');

// Get the button that opens the register_var
var btnRegist = document.getElementById("myBtnRegister");

// Get the <span> element that closes the register_var
var spanReg = document.getElementsByClassName("closeRegister")[0];

// When the user clicks the button, open the register_var 
btnRegist.onclick = function() {
    register_var.style.display = "block";
}

// When the user clicks on <span> (x), close the register_var
spanReg.onclick = function() {
    register_var.style.display = "none";
}

// When the user clicks anywhere outside of the register_var, close it
window.onclick = function(event) {
    if (event.target == register_var) {
        register_var.style.display = "none";
    }
}

function weergevenRegisterInfo() {
 
    if (firstname == "" && surname == "" && address == "" && sex == "" && email == "" ){
        alert ("Gelieve elk veld in te vullen!");
    }else{
    window.location = "../www/pages/logout.html";
    }
    
}


/********************************************************************************************/
/************************************* Inloggen - loginknop  ********************************/
/********************************************************************************************/

/* Login pop-up box bij drukken op loginknop */
// Get the login_var
var login_var = document.getElementById('loginPopUp');

// Get the button that opens the login_var
var btn = document.getElementById("myBtnLogin");

// Get the <span> element that closes the login_var
var span = document.getElementsByClassName("closeLogin")[0];

// When the user clicks the button, open the login_var 
btn.onclick = function() {
    login_var.style.display = "block";
}

// When the user clicks on <span> (x), close the login_var
span.onclick = function() {
    login_var.style.display = "none";
}

// When the user clicks anywhere outside of the login_var, close it
window.onclick = function(event) {
    if (event.target == login_var) {
        login_var.style.display = "none";
    }
}


/* logincheck en terug naar profile.html gestuurd worden */
var count = 2;
function validate() {
var un = document.loginform.username.value;
var pw = document.loginform.pword.value;
var valid = false;
var unArray = ["jodie", "niel", "username3", "username4"];  
var pwArray = ["jodie", "niel", "password3", "password4"]; 



for (var i=0; i <unArray.length; i++) {
if ((un == unArray[i]) && (pw == pwArray[i])) {
valid = true;
break;
}
}
if (valid) {
/*alert ("Login was sucessfully processed.  You will be redirected back to your profile page.");*/
window.location = "pages/logout.html";


/* proberen sluiten bij knop registreren in pop-up */
login_var.style.display = "none";

/* onzichtbaar maken van loginknop en registerknop en zichtbaar maken van logoutknop */
knopLogout.style.display = "initial";
btn.style.display = "none";
btnRegist.style.display = "none";


/* invullen van gegevens */
if((un == unArray[i]) && (pw == pwArray[i])){
    document.getElementById("firstNameP").innerHTML = objPeopleProfile[i].firstName;
    document.getElementById("nameP").innerHTML = objPeopleProfile[i].Name;
    document.getElementById("addressP").innerHTML = objPeopleProfile[i].address;
    document.getElementById("sexP").innerHTML = objPeopleProfile[i].sex;
    document.getElementById("emailP").innerHTML = objPeopleProfile[i].email;
}

}else{
    alert("Onjuist wachtwoord en/of gebruikersnaam.");
    window.location = "index.html";
  }
}

