// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach(service => console.log(service.headline))



// hero

const heroDOM = document.querySelector(".hero")

const heroImg = document.createElement("img")
heroImg.setAttribute("src", hero.image)
heroImg.classList.add("hero__img")

const heroHeadline = document.createElement("h1")
heroHeadline.textContent = hero.headline
heroHeadline.classList.add("hero__header")

const heroP = document.createElement("p")
heroP.textContent = hero.copy
heroP.classList.add("hero__text")

const heroBtn = document.createElement("button")
heroBtn.classList.add("hero__btn")
const heroBtnImg = document.createElement("img")
heroBtnImg.setAttribute("src", hero.icon)
heroBtnImg.classList.add("hero__btn_img")
heroBtn.textContent += `Explore`
heroBtn.prepend(heroBtnImg)

const heroDiv = document.createElement("div")
heroDiv.classList.add("hero_wrapper")

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


// facilities

const faciDOM = document.querySelector(".facilities")
const faciHeader = document.createElement("h2")

faciHeader.textContent = facilities.headline
faciHeader.classList.add("faci__header")
faciDOM.append(faciHeader)

facilities.options.forEach(function(option){
    
    const faciImg = document.createElement("img")
    faciImg.setAttribute("src",option.icon)
    faciImg.classList.add("faci__img")

    const faciChildHeader = document.createElement("h3")
    faciChildHeader.classList.add("faci__child_header")
    faciChildHeader.textContent = option.headline

    const faciText = document.createElement("p")
    faciText.classList.add("faci__text")
    faciText.textContent = option.text

    faciDOM.append(faciImg,faciChildHeader,faciText)
})


