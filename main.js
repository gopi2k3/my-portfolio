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

let icons=document.querySelectorAll('.fas')

// let moon=document.querySelector('.fa-moon')

let nav=document.querySelectorAll('.nav-content')

lightbtn.addEventListener("click",function(){
	
	
	

	
	
		
		// lightbtn.classList.toggle("btnclr");
	aboutsec.classList.toggle("lightmood");
	skillsec.classList.toggle("lightmood");
	contactsec.classList.toggle("lightmood");
	trainnesec.classList.toggle("lightmood");
	edusec.classList.toggle("lightmood");
	banner.classList.toggle("lightmood");
	headnav.classList.toggle("lightmood");
	bodysec.classList.toggle("lightmood");
	projsec.classList.toggle("lightmood");

	

	icons.forEach((e)=>{
		e.classList.toggle('dark')
	})

	// moon.classList.toggle('dark')
	
	
	// ancher.classList.add("lightmood")
	let ancher=document.querySelectorAll(".nav-content");

ancher.forEach((e)=>{
	e.classList.toggle("lightmood");
})


nav.forEach((e)=>{
	e.classList.toggle('dark')
})
	
	
	
	
	
	
	
})





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

let title=false
	setInterval(()=>{
		document.title=title? 'Portfolio':'Made by Gopi'
	
		title=!title
	},2000)