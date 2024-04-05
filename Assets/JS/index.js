window.addEventListener("DOMContentLoaded", () => {
  const firstPa = document.getElementById("first");
  const secondPa = document.getElementById("second");
  const thirdPa = document.getElementById("third");
  const fourthPa = document.getElementById("fourth");
  const newPar = document.querySelectorAll("#new");
  const iconImage = document.querySelectorAll("#icon");
  

  //First FAQ section
  firstPa.addEventListener("click", () => {
    iconImage[0].src = "./Assets/IMG/icon-minus.svg"
    newPar[0].textContent =
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";
    newPar[0].style.fontWeight = "400";
    newPar[0].style.color = "rgb(140, 105, 145)";
    newPar[0].style.display = "block";
    firstPa.style.color = "rgb(47, 21, 51)";

    newPar[0].addEventListener("mouseover", () => {
      newPar[0].style.cursor = "text";
    });

    firstPa.addEventListener("click", () => {
      if (newPar[0].style.display == "block") {
        newPar[0].style.display = "none";
        iconImage[0].src = "./Assets/IMG/icon-plus.svg";
        firstPa.addEventListener("mouseover", () => {
            firstPa.style.color = "rgb(140, 105, 145)";
        });
        firstPa.addEventListener("mouseout", () => {
          firstPa.style.color = "rgb(47, 21, 51)";
        });
      } else if (newPar[0].style.display == "none") {
        newPar[0].style.display = "block";
        iconImage[0].src = "./Assets/IMG/icon-minus.svg";
      }else{
        newPar[0].style.display = "normal"
      }
    });
  });

  //Second FAQ section
  secondPa.addEventListener("click", () =>{
    iconImage[1].src = "./Assets/IMG/icon-minus.svg"
      newPar[1].textContent = "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.";
      newPar[1].style.fontWeight = "400";
    newPar[1].style.color = "rgb(140, 105, 145)";
    newPar[1].style.display = "block";
    secondPa.style.color = "rgb(47, 21, 51)";

    newPar[1].addEventListener("mouseover", () => {
      newPar[1].style.cursor = "text";
    });

      secondPa.addEventListener("click", ()  =>{
        if (newPar[1].style.display == "block") {
          newPar[1].style.display = "none";
          iconImage[1].src = "./Assets/IMG/icon-plus.svg";
          secondPa.addEventListener("mouseover", () => {
            secondPa.style.color = "rgb(140, 105, 145)";
          });
          secondPa.addEventListener("mouseout", () => {
            secondPa.style.color = "rgb(47, 21, 51)";
          });
        } else if (newPar[1].style.display == "none") {
          newPar[1].style.display = "block";
          iconImage[1].src = "./Assets/IMG/icon-minus.svg";
        }else{
          newPar[1].style.display = "normal"
        }
      });
  })

  //Third FAQ section
  thirdPa.addEventListener("click", () =>{
    iconImage[2].src = "./Assets/IMG/icon-minus.svg"
      newPar[2].textContent = " Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!";
      newPar[2].style.fontWeight = "400";
    newPar[2].style.color = "rgb(140, 105, 145)";
    newPar[2].style.display = "block";
    thirdPa.style.color = "rgb(47, 21, 51)";

    newPar[2].addEventListener("mouseover", () => {
      newPar[2].style.cursor = "text";
    });

      thirdPa.addEventListener("click", ()  =>{
        if (newPar[2].style.display == "block") {
          newPar[2].style.display = "none";
          iconImage[2].src = "./Assets/IMG/icon-plus.svg";
          thirdPa.addEventListener("mouseover", () => {
            thirdPa.style.color = "rgb(140, 105, 145)";
          });
          thirdPa.addEventListener("mouseout", () => {
            thirdPa.style.color = "rgb(47, 21, 51)";
          });
        } else if (newPar[2].style.display == "none") {
          newPar[2].style.display = "block";
          iconImage[2].src = "./Assets/IMG/icon-minus.svg";
        }else{
          newPar[2].style.display = "normal"
        }
      });
  })

  //Fourth FAQ section
  fourthPa.addEventListener("click", () =>{
    iconImage[3].src = "./Assets/IMG/icon-minus.svg"
      newPar[3].textContent = " The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.";
      newPar[3].style.fontWeight = "400";
    newPar[3].style.color = "rgb(140, 105, 145)";
    newPar[3].style.display = "block";
    fourthPa.style.color = "rgb(47, 21, 51)";

    newPar[3].addEventListener("mouseover", () => {
      newPar[3].style.cursor = "text";
    });
      
      fourthPa.addEventListener("click", ()  =>{
        if (newPar[3].style.display == "block") {
          newPar[3].style.display = "none";
          iconImage[3].src = "./Assets/IMG/icon-plus.svg";
          fourthPa.addEventListener("mouseover", () => {
            fourthPa.style.color = "rgb(140, 105, 145)";
          });
          fourthPa.addEventListener("mouseout", () => {
            fourthPa.style.color = "rgb(47, 21, 51)";
          });
        } else if (newPar[3].style.display == "none") {
          newPar[3].style.display = "block";
          iconImage[3].src = "./Assets/IMG/icon-minus.svg";
        }else{
          newPar[3].style.display = "normal"
        }
      });
      });
  
});
