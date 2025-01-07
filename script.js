// ----about section--------

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ------

var sidemenu = document.querySelector(".nav-2");

function openmenu(){
    sidemenu.style.right = "0";

}
function closemenu(){
    sidemenu.style.right = "-200px";

}

function sendEmail(){
   var templateParms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
       

    };
    // if (!name || !email || !message) {
    //     alert("Please fill in all fields.");
    //     return; // Stop the function if any field is empty
    // } 

    // emailjs.send("service_yehn5qi", "template_khhnck1", templateParms).then(alert("sent successfully!"))
    
}

var initialPath = "M 10 100 Q 500 100 900 100"

var finalPath = "M 10 100 Q 500 100 900 100"

var string = document.querySelector(".string");


string.addEventListener("mousemove", (dets)=>{
   path = `M 10 100 Q ${dets.x} ${dets.y}  900 100`

   gsap.to("svg path", {
      attr: {d:path},
      duration: 0.2,
      ease: "power3.out"
   })
})

string.addEventListener("mouseleave", ()=>{
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration: 1.6,
        ease: "elastic.out(1,0.2"
    })
})