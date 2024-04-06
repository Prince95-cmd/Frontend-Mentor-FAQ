window.addEventListener("DOMContentLoaded", () => {
  
   const newPar = document.querySelectorAll("#new");
  const iconImage = document.querySelectorAll("#icon");
  const paragraphs = document.querySelectorAll(".paragraph");
  paragraphs.forEach((mainParagraph, i) =>{
    mainParagraph.addEventListener("click", () =>{
      iconImage[i].src = "./Assets/IMG/icon-minus.svg"
      if(newPar[0]){
      newPar[0].textContent =
       "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";
      }if(newPar[1]){
        newPar[1].textContent =
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.";
      }if(newPar[2]){
        newPar[2].textContent =
        " Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!";
      }if(newPar[3]){
        newPar[3].textContent = 
        " The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.";
      }


      if(newPar[i]){
       newPar[i].style.fontWeight = "400";
       newPar[i].style.color = "rgb(140, 105, 145)";
       newPar[i].style.display = "block";
      }
       mainParagraph.style.color = "rgb(47, 21, 51)";

       newPar[i].addEventListener("mouseover", () => {
            newPar[i].style.cursor = "text";
          });
      
          mainParagraph.addEventListener("click", () => {
            if (newPar[i].style.display == "block") {
              newPar[i].style.display = "none";
              iconImage[i].src = "./Assets/IMG/icon-plus.svg";
              mainParagraph.addEventListener("mouseover", () => {
                  mainParagraph.style.color = "rgb(140, 105, 145)";
              });
              mainParagraph.addEventListener("mouseout", () => {
                mainParagraph.style.color = "rgb(47, 21, 51)";
              });
            } else if (newPar[i].style.display == "none") {
              newPar[i].style.display = "block";
              iconImage[i].src = "./Assets/IMG/icon-minus.svg";
            }else{
              newPar[i].style.display = "normal"
            }
          });
    })
  });
});
