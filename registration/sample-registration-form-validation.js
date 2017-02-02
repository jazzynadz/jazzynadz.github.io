function formValidation() 
{
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var umsex = document.registration.sex; 
    var uinstrumetn = document.registration.instrument;
{
if (passid_validation(passid,7,12))
{
if(allLetter(uname))        
{
if(alphanumeric(uadd))
{
if(countryselect(ucountry))
}
if(validsex(umsex,ufsex))
{
}
}
}
}
}
return false;


    
    
    
function allLetter(uname)
{
va letters = /^[A-Za-z]+$/;
if (uname.value.match(letters))
{
return true;
}
else
{
alert ('Username must have alphabet characters only');
    uname.focus();
    return false;
}
}
    
    
    
    
    
 function alphanumeric(uadd)   
{
var letters = /^[0-9a-zA-Z]+$/;
{
return true;
}
}
    
    
    