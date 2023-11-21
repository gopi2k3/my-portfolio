let btn=document.querySelector("#btn");

let change=document.querySelector(".total1")


btn.addEventListener('click',function(){
	
	
	change.classList.toggle("active");
	
	
	
})
	

		
		let all=document.querySelectorAll(".nav2-content")
		
		console.log(all)
		all.forEach(e=>{
			
			e.addEventListener('click',function(){
				
				change.classList.remove("active")
			})
		})
	




let lightbtn=document.querySelector(".mood");

let banner=document.querySelector(".banner-sec");


let headnav=document.querySelector(".head-sec")

let aboutsec=document.querySelector(".about-sec")

let skillsec=document.querySelector(".skill-sec");

let edusec=document.querySelector(".Education-sec");

let trainnesec=document.querySelector(".trainee-sec");

let contactsec=document.querySelector(".contact-sec")

let bodysec=document.querySelector("body");

let projsec=document.querySelector(".project-section");

let count=0;
lightbtn.addEventListener("click",function(){
	
	
	
	count++;
	
	if(count==1){
		
		lightbtn.classList.add("btnclr");
	aboutsec.classList.add("lightmood");
	skillsec.classList.add("lightmood");
	contactsec.classList.add("lightmood");
	trainnesec.classList.add("lightmood");
	edusec.classList.add("lightmood");
	banner.classList.add("lightmood");
	headnav.classList.add("lightmood");
	bodysec.classList.add("lightmood");
	projsec.classList.add("lightmood");
	
	
	// ancher.classList.add("lightmood")
	let ancher=document.querySelectorAll(".nav-content");

ancher.forEach((e)=>{
	e.classList.add("lightmood");
})

	}
	
	else{
		count=0;
		lightbtn.classList.remove("btnclr");
		aboutsec.classList.remove("lightmood");
		skillsec.classList.remove("lightmood");
		contactsec.classList.remove("lightmood");
		trainnesec.classList.remove("lightmood");
		edusec.classList.remove("lightmood");
		banner.classList.remove("lightmood");
		headnav.classList.remove("lightmood");
		bodysec.classList.remove("lightmood");
		projsec.classList.remove("lightmood");
		// projsec.classList.remove("project-section");
		
		
		
			let ancher=document.querySelectorAll(".nav-content");

ancher.forEach((e)=>{
	e.classList.remove("lightmood");
})
	}
	
	
	
	
})

// var typed=new Typed(".my-name",{
	
	// strings:["Gopi"],
	// typeSpeed:150,
	// backSpeed:150,
	// loop:true
// })



// mouse



let curser=document.querySelector(".curser");

// console.log(curser)

// var time;
// document.addEventListener('mousemove',(e)=>{
	
	// let a=e.pageX+"px";
	// let b=e.pageY+"px";
	
   
   // curser.style.top=b;
   // curser.style.left=a;
	
	// curser.style.display="block";
	
	
	// function mouseOut(){
		
		// curser.style.display="none";
		
	// }
	 // clearTimeout(time)
	 
   // time=setTimeout(mouseOut,1000);
	
	// })

// document.addEventListener("mouseout",()=>{
	
	// curser.style.display="none";
// })
	
	
	let up=document.querySelector('.up')
	
	window.addEventListener('scroll',(e)=>{
        // console.log(window.pageYOffset)
  
		if(pageYOffset>140){
             up.style.display='flex'
			 
		}
		else{
			up.style.display='none'
		}
		

	})
	
	
	let load=document.querySelector('.load')
	
	window.addEventListener('load',(e)=>{
		
		load.style.display='none'
		
	})