const sections = document.querySelectorAll('.section');
//select parent and child
const secBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
//select Body
const allSections = document.querySelector('.main-content');


function PageTransitions(){
    //activates button class
    for (let i=0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentActive = document.querySelectorAll('.active-btn');
            currentActive[0].className = currentActive[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })
    }
    //section Active class
    allSections.addEventListener('click', (e) =>{
     const id = e.target.dataset.id;
     console.log(id)
     if(id){
        //remove selected from other btns
        secBtns.forEach((btn)=>{
            if(btn){
            btn.classList.remove('active')
        }})
        e.target.classList.add('active')

        //hide other sections
        sections.forEach((section)=>{
            section.classList.remove('active')
        })

        const element = document.getElementById(id);
        if (element){
        element.classList.add('active')
             }     }
    })
    //toggle theme color
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })

    
}
function toggleDropdown() {
    
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
toggleDropdown();
PageTransitions();
