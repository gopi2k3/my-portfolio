let headBtn=document.querySelector('.head-icon')
let nav=document.querySelector('.nav2')

headBtn.addEventListener('click',()=>{
   nav.classList.toggle('active')
})

let headLi=document.querySelectorAll('.head-li')       //resposive nav bar ==============

headLi.forEach((e)=>{
    e.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
})


// document.body.addEventListener('click',()=>{

// nav.classList.remove('active')

// })



                         //Dark mood =============


                             
let moodIcon=document.querySelector('.dark-mood')
let sun =document.querySelector('.sun')
let totalChange=document.querySelectorAll('.change-mood')

moodIcon.addEventListener('click',()=>{
    // sun.classList.toggle('dark')

 totalChange.forEach((e)=>{
        e.classList.toggle('dark')
    })

    
})



                                       //Arrow up

let up=document.querySelector('.arrow')

up.addEventListener('Click',()=>{
    window.scrollTo({top:0,behavior:'smooth'})
})

 window.addEventListener('scroll',(e)=>{
                                       
 if(pageYOffset==0){
        up.style.display='none'
 }
 else if(pageYOffset>140){
         up.style.display='flex'
                                             
}
else{
        up.style.display='none'
    }
                                        
    })









  


    let a=false


    setInterval(()=>{

        document.title=a? 'Portfolio':'Gopi'
        a=!a
    },2000)




    let headI=document.querySelector('.head-icon')
   let one=document.querySelector('.sp1')
   let two=document.querySelector('.sp2')
   let three=document.querySelector('.sp3')
    headI.addEventListener('click',()=>{
        one.classList.toggle('active1')
        two.classList.toggle('active2')
        three.classList.toggle('active3')
    })

