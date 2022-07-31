/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let sections=Array.from( document.querySelectorAll('section'));
let count= sections.length;
let navBar = document.querySelector('#navbar__list');
let mainHero = document.querySelector('.main__hero');
let main = document.querySelector('main');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

let addLink =(section) =>
{    let link = document.createElement('a');
    link.classList.add('menu__link');
    let sectionName= section.getAttribute('data-nav')
    let sectionid= section.getAttribute('id')
    link.setAttribute('href',`#${sectionid}`)
    link.innerHTML =`  ${sectionName} ` ;
    navBar.appendChild(link);    
}
// function run when click at add section button
let addsection =()=>{
    ++count;
    let sec= document.createElement('section');
sec.setAttribute("id",`section${count}`);
sec.setAttribute("data-nav",`section ${count}`);
sec.classList
sec.innerHTML = `<div class="landing__container">
<h2>Section ${count}</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

<p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
</div>`
;
sections.push(sec); 
addLink(sec );   
main.appendChild(sec);
};


//remove active class from all section 
let removeActiveClass=()=>{
    for (const section of sections) {
        section.classList.remove('your-active-class')
     }
}

//add active class to section when click at link in navBar
let addActiveClass=(e)=>{
    //remove # from href attribute
    secName=e.getAttribute('href').substring(1);
    console.log(secName)

    for (const section of sections) {
        section.getAttribute("id") === secName ?section.classList.add('your-active-class'):'';

    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav ... for every section in html we add link to nav
for (const section of sections) {
    addLink(section);    
 }
 
// i'm create button to add new section by js
let button = document.createElement("button");
button.style.cssText="    width: 500px; height: 171px; border-radius: 50%; background-color: blanchedalmond; cursor: pointer;font-size: x-large; font-family: cursive; font-weight: 900; margin-left: 75px; "
button.textContent =`+Add New Section`;
mainHero.appendChild(button);
// Add class 'active' to section when near top of viewport
let viewPort = (section) => {
    let { top: topOfSection, bottom: bottomOfSection } =
      section.getBoundingClientRect();
     if(topOfSection >= 0 && bottomOfSection <= window.innerHeight){
        removeActiveClass();
        section.classList.add('your-active-class');
    } 
  };
  document.addEventListener("scroll", changeActiveOfClass);

  function changeActiveOfClass(){
    for (const section of sections) {
        viewPort(section);
            
     }
  }
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * 
*/

button.addEventListener('click',addsection)

// Scroll to section on link click
/*
add this code to css file
html{
    scroll-behavior: smooth;
}
*/

// Set sections as active
navBar.addEventListener("click",(e)=>{
    removeActiveClass();
    addActiveClass(e.target);
}) 



 

