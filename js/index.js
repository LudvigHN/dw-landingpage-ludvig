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

heroImg.classList.add("hero__img")
heroDiv.classList.add("hero_wrapper")
heroBtn.classList.add("hero__btn")
heroHeadline.classList.add("hero__header")
heroP.classList.add("hero__text")
heroBtnImg.classList.add("hero__btn_img")

heroDiv.append(heroHeadline, heroP, heroBtn)
heroDOM.append(heroImg, heroDiv)

// services
const serviceDOM = document.querySelector(".services")

services.forEach(function(service){
    const serviceImg = document.createElement("img")
    serviceImg.setAttribute("src",service.illustration)

    const serviceHeader = document.createElement("h2")
    serviceHeader.classList.add("service__header")
    serviceHeader.textContent = service.headline

    const serviceText = document.createElement("p")
    serviceText.classList.add("service__p")
    serviceText.textContent = service.text

    const serviceLink = document.createElement("a")
    serviceLink.classList.add("service__link")
    serviceLink.textContent = service.linktext

    const serviceWrapper = document.createElement("div")
    serviceWrapper.classList.add("service_wrapper")

    serviceWrapper.append(serviceImg,serviceHeader,serviceText,serviceLink)
    serviceDOM.append(serviceWrapper)

})
