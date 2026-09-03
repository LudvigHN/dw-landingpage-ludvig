// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach(service => console.log(service.headline))



// hero

const heroDOM = document.querySelector(".hero")

const heroImg = document.createElement("img")
const heroHeadline = document.createElement("h1")
const heroP = document.createElement("p")
const heroBtn = document.createElement("button")
const heroBtnImg = document.createElement("img")
heroImg.setAttribute("src", hero.image)
heroHeadline.textContent = hero.headline
heroP.textContent = hero.copy

heroBtnImg.setAttribute("src", hero.icon)

heroBtn.textContent = `Explore`
heroBtn.prepend(heroBtnImg)
const heroDiv = document.createElement("div")
heroDiv.append(heroHeadline, heroP, heroBtn)
heroDOM.append(heroImg, heroDiv)



