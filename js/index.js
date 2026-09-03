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

services.forEach(function (service) {
    const serviceImg = document.createElement("img")
    serviceImg.setAttribute("src", service.illustration)

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

    serviceWrapper.append(serviceImg, serviceHeader, serviceText, serviceLink)
    serviceDOM.append(serviceWrapper)

})


// facilities

const faciDOM = document.querySelector(".facilities")
const faciHeader = document.createElement("h2")

faciHeader.textContent = facilities.headline
faciHeader.classList.add("faci__header")
faciDOM.append(faciHeader)

facilities.options.forEach(function (option) {
    const faciItemWrapper = document.createElement("div")

    const faciImg = document.createElement("img")
    faciImg.setAttribute("src", option.icon)
    faciImg.classList.add("faci__img")

    const faciChildHeader = document.createElement("h3")
    faciChildHeader.classList.add("faci__child_header")
    faciChildHeader.textContent = option.headline

    const faciText = document.createElement("p")
    faciText.classList.add("faci__text")
    faciText.textContent = option.text

    faciItemWrapper.append(faciImg, faciChildHeader, faciText)
    faciDOM.append(faciItemWrapper)
})

// sites

const sitesDOM = document.querySelector(".sites")

const sitesDivText = document.createElement("div")
sitesDivText.classList.add("sites__text_wrapper")

const sitesHeader = document.createElement("h2")
sitesHeader.classList.add("sites__header")
sitesHeader.textContent = sites.headline

const sitesText = document.createElement("p")
sitesText.classList.add("sites__text")
sitesText.textContent = sites.text

const sitesBtn = document.createElement("button")
sitesBtn.classList.add("sites__btn")
const sitesBtnImg = document.createElement("img")
sitesBtnImg.setAttribute("src", sites.btnicon)
sitesBtnImg.classList.add("sites__btn_img")
sitesBtn.textContent += "Start"
sitesBtn.prepend(sitesBtnImg)

sitesDivText.append(sitesHeader,sitesText,sitesBtn)

const PlacesDiv = document.createElement("div")
PlacesDiv.classList.add("sites__places_wrapper")

sites.places.forEach(function(place){
    const placesItemDiv = document.createElement("div")
    const placeImg = document.createElement("img")
    placeImg.setAttribute("src", place.img)
    placeImg.classList.add("place__img")

    const placeHeader = document.createElement("h3")
    placeHeader.classList.add("place_header")
    placeHeader.textContent = place.name

    const placeCity = document.createElement("p")
    placeCity.classList.add("place__text")
    placeCity.textContent = place.city

    const placeLink = document.createElement("a")
    placeLink.classList.add("place__link")
    place.textContent = "View the Site"

    placesItemDiv.append(placeImg,placeHeader,placeCity,placeLink)
    PlacesDiv.append(placesItemDiv)
})



sitesDOM.append(sitesDivText, PlacesDiv)