const btnSignup=document.querySelector('.btnSignup');
const modalsignUp=document.querySelector('.signUp');
btnSignup.addEventListener('click',()=>{
    modalsignUp.style.display='block'
})
const hideModal=document.querySelector('.fa-x');
hideModal.addEventListener('click',()=>{
    modalsignUp.style.display='none'
})