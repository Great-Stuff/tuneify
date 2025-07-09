const bottomSection = document.querySelector("#bottomSection")
const bottomSectionWrapper = document.querySelector("#bottomSectionWrapper")
const nav = document.querySelector("#nav")

function setBottomSectionHeight(nav, wrapper){
    var navBoundingClientTop = nav.getBoundingClientRect().top
    var wrapperBoundingClientTop = wrapper.getBoundingClientRect().top
    var setHeight = navBoundingClientTop - wrapperBoundingClientTop
    wrapper.style["height"] = (setHeight - 20) + "px"
}

const APIController = (function(){
    const clientID = ""
    const clientSecret = ""
})

document.addEventListener('reload', setBottomSectionHeight(nav, bottomSectionWrapper))