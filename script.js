const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const retypepassword=document.getElementById('retypepassword');
const submit=document.querySelector('.submit-btn');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkinputs();
});

function checkinputs()
{
    const usernamevalue=username.value.trim();
    const emailvalue=email.value.trim();
    const passwordvalue=password.value.trim();
    const retypepasswordvalue=retypepassword.value.trim();

    if(usernamevalue==='')
    
    {
        setError(username,'Username Cannot be Empty');
        
    }
    else{
        setSuccess(username,'Sucessfull');
    }

    if(emailvalue==='')
    {
        setError(email,'Email Cannot be Blank');
    }
    else if(!Isemail(emailvalue))
    {
        setError(email,'Email is Invalid');
    }
    else{
        setSuccess(email,'Sucsess');
    }

    if(passwordvalue==='')
    {
        setError(password,'Password cannot be empty');
    }
    else if(!IsPassword(passwordvalue))
    {
        setError(password,"Minimum eight characters, at least one letter and one number")
    }
    else{
        setSuccess(password,'Sucsess');
    }

    if(retypepasswordvalue==='')
    {
        setError(retypepassword,'Password2 cannnot be Empty');
    }
    else if(passwordvalue!=retypepasswordvalue)
    {
        setError(retypepassword,'Password Does not Matches');
    }
    else
    {
        setSuccess(retypepassword,'Success')
    }

}
function setError(input,message)
{
const formcontrol=input.parentElement;
const small=formcontrol.querySelector('small');
small.innerText=message;
small.style.color='red';


}
function setSuccess(input,message)
{
    const formcontrol=input.parentElement;
    const small=formcontrol.querySelector('small');
    small.innerText=message;
    small.style.color='green';
}
function Isemail(email)
{
    return /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}/.test(email);
}
function IsPassword(password)
{
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}