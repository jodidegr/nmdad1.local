
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

/* informationToShow onzichtbaar maken als je er nog niet op gedrukt hebt */
var infoKader = document.getElementById("informationToShow");
infoKader.style.display = "none";

// knop login laten veranderen in logout
var knopLogout = document.getElementById("myBtnRLogout");
knopLogout.style.display = "none";

// Get the button that opens the logout_var
var btnLogOut = document.getElementById("myBtnRLogout");

btnLogOut.onclick = function(){
    knopLogout.style.display = "none";
    btn.style.display = "initial";
    btnRegist.style.display = "initial";
    infoKader.style.display = "none";
    dogKm.style.display = "none";
    titelProfileLogin.innerHTML = "Login";
}

// variabel en onzichtbaar maken van informationDog&kmToShow */
var dogKm = document.getElementById("informationDog&kmToShow");
dogKm.style.display = "none";


// titel veranderen als niet aangemeld 
var titelProfileLogin = document.getElementById("titelProfile");
titelProfileLogin.innerHTML = "Login";

/* verplaatsen van loginbut en registerbut */
document.getElementById("myBtnLogin").style.cssFloat = "left";
document.getElementById("myBtnRegister").style.cssFloat = "left";

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

/* register - als je invult worden de gegevens aangevuld (voorlopig enkel op login.html) */ 
    var firstname = document.getElementById("firstname").value;
    var surname = document.getElementById("surname").value;
    var address = document.getElementById("address").value;
    var sex = document.getElementById("sex").value;
    var email = document.getElementById("email").value;

function weergevenRegisterInfo() {
    /* proberen sluiten bij knop registreren in pop-up */
    register_var.style.display = "none";
    /* weergeven van info na bovenstaande */
    document.getElementById("firstNameP").innerHTML = firstname;
    document.getElementById("nameP").innerHTML = surname;
    document.getElementById("addressP").innerHTML = address;
    document.getElementById("sexP").innerHTML = sex;
    document.getElementById("emailP").innerHTML = email;
    /* zichtbaar maken van infoKader */
    infoKader.style.display = "initial";
    knopLogout.style.display = "initial";
    btn.style.display = "none";
    btnRegist.style.display = "none";
    dogKm.style.display = "initial";
    titelProfileLogin.innerHTML = "Profile";
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


/* logincheck en yerug naar profile.html gestuurd worden */
var count = 2;
function validate() {
var un = document.loginform.username.value;
var pw = document.loginform.pword.value;
var valid = false;
var unArray = ["jodie", "niel", "username3", "username4"];  
var pwArray = ["jodie", "niel", "password3", "password4"]; 
var infoKaderLogin = document.getElementById("informationToShow");

for (var i=0; i <unArray.length; i++) {
if ((un == unArray[i]) && (pw == pwArray[i])) {
valid = true;
break;
}
}
if (valid) {
/*alert ("Login was sucessfully processed.  You will be redirected back to your profile page.");*/

/* zichtbaar maken van infoKader */
infoKaderLogin.style.display = "initial";

/* proberen sluiten bij knop registreren in pop-up */
login_var.style.display = "none";

/* onzichtbaar maken van loginknop en registerknop en zichtbaar maken van logoutknop */
knopLogout.style.display = "initial";
btn.style.display = "none";
btnRegist.style.display = "none";
dogKm.style.display = "initial";
titelProfileLogin.innerHTML = "Profile";

/* invullen van gegevens */
if((un == unArray[i]) && (pw == pwArray[i])){
    document.getElementById("firstNameP").innerHTML = objPeopleProfile[i].firstName;
    document.getElementById("nameP").innerHTML = objPeopleProfile[i].Name;
    document.getElementById("addressP").innerHTML = objPeopleProfile[i].address;
    document.getElementById("sexP").innerHTML = objPeopleProfile[i].sex;
    document.getElementById("emailP").innerHTML = objPeopleProfile[i].email;
}

return false;
}else{
    alert("Wrong password and/or Username")
  }
}

/********************************************************************************************/
/************************************* Change Dog  ********************************/
/********************************************************************************************/

/* Login pop-up box bij drukken op loginknop */
// Get the dog_var
var dog_var = document.getElementById("DogPopUp");

// Get the button that opens the dog_var
var btnDOG = document.getElementById("myBtnChangeDog");

// Get the <span> element that closes the dog_var
var spanDog = document.getElementsByClassName("closeDog")[0];

// When the user clicks the button, open the dog_var 
btnDOG.onclick = function() {
    dog_var.style.display = "block";
}

// When the user clicks on <span> (x), close the dog_var
spanDog.onclick = function() {
    dog_var.style.display = "none";
}

// When the user clicks anywhere outside of the dog_var, close it
window.onclick = function(event) {
    if (event.target == register_var) {
        dog_var.style.display = "none";
    }
}

/* register - als je invult worden de gegevens aangevuld (voorlopig enkel op login.html) */ 
    var dognameValue = document.getElementById("inputDogName").value;
    var dogsexValue = document.getElementById("inputDogSex").value;
    var dogbreedValue = document.getElementById("inputDogBreed").value;

function validateDOG() {
    /* proberen sluiten bij knop confirm changes in pop-up */
    dog_var.style.display = "none";
    /* weergeven van info na bovenstaande */
    document.getElementById("dognameP").innerHTML = dognameValue;
    document.getElementById("dogsexP").innerHTML = dogsexValue;
    document.getElementById("dogbreedP").innerHTML = dogbreedValue;
}
