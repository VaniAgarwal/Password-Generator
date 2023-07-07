let inputSlider = document.getElementById('inputslider');
let sliderValue = document.getElementById('sliderValue');
let passbox = document.getElementById('passBox');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let button = document.getElementById('button');
let copy = document.getElementById('copyIcon');


//showing input slider value
sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent=inputSlider.value;
});

button.addEventListener('click', ()=>{
    passbox.value=generatePassword();
})

let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseChars = upperCaseChars.toLowerCase();
let allNumbers = "0123456789";
let allSymbols = "~!@#$^&";


//function to generate password
function generatePassword(){
    let genPass = "";
    
    let allChars = "";
    allChars += lowercase.checked ? lowerCaseChars : "";
    allChars += uppercase.checked ? upperCaseChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if(allChars == "" || allChars.length==0){
        return genPass;
    }

    for(let i = 1;i<=inputSlider.value;i++){
        
        genPass += allChars.charAt(Math.floor(Math.random() * allChars.length)); //generates value between 0 and 1
    }

    return genPass;
}
copy.addEventListener('click', ()=>{
    if(passbox.value.length !=0){
        navigator.clipboard.writeText(passbox.value);
        copy.innerText = "check";
        copy.title = "Password Copied";

        setTimeout(()=>{
            copy.innerText = "content_copy";
            copy.title = "";

        },2000)

    }
    
});

