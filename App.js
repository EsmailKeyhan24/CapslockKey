const email=document.getElementById('email')
const error=document.getElementById('error')

email.addEventListener('keyup' , (e)=>{
    if(e.getModifierState('CapsLock')){
        error.style.display='block'
    }else{
        error.style.display='none'
    }
})