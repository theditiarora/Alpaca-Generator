const acBtn = document.querySelectorAll(".ac-btn")
const styleDiv = document.querySelector(".style-div")

// LIKEWISE BTN APPEARANCE
const styleBtnDiv = document.createElement("div")
styleBtnDiv.classList.add("style-btn-div")

styleDiv.appendChild(styleBtnDiv)

// hairs
acBtn[0].addEventListener("click", () => {
    styleBtnDiv.innerHTML = `
    <button value="hair" class="btn curlBtn ac-btn">Curls</button>
    <button value="hand" class="btn elegantBtn ac-btn">Elegant</button>
    <button value="background" class="btn quiffBtn ac-btn">Quiff</button>
    <button value="mouth" class="btn plainBtn ac-btn">Plain</button>`

    // curl hair
    let curlsBtn = styleBtnDiv.querySelector(".curlBtn")
    let curls = document.querySelector(".curls")
    curlsBtn.addEventListener("click", () => {
        !bangs.classList.contains("hidden") ? bangs.classList.add("hidden") :  null
        curls.classList.remove("hidden")
    })
    
    // short hair
    let elegantBtn = styleBtnDiv.querySelector(".elegantBtn")
    let bangs = document.querySelector(".bangs") 
    elegantBtn.addEventListener("click", () => {
        !curls.classList.contains("hidden") || bangs.classList.contains("quiff") ? curls.classList.add("hidden") || bangs.classList.remove("quiff"):  null
        bangs.classList.remove("hidden")
        
        bangs.classList.add("short-hair")
    })
    
    // quiff hair
    let quiffBtn = styleBtnDiv.querySelector(".quiffBtn")
    quiffBtn.addEventListener("click", () => {
        !curls.classList.contains("hidden") ? curls.classList.add("hidden") :  null
        bangs.classList.remove("hidden")

        bangs.classList.add("quiff")
    })
    
    // plain
    let plainBtn =  document.querySelector(".plainBtn")
    
    plainBtn.addEventListener("click", () => {
        !curls.classList.contains("hidden") || bangs.classList.contains("quiff") || bangs.classList.contains("short-hair") ? curls.classList.add("hidden") || bangs.classList.add("hidden") :  null
    })
    
})

// hand
acBtn[1].addEventListener("click", () => {
    styleBtnDiv.innerHTML = `
    <button value="hair" class="btn teaBtn ac-btn">Tea</button>
    <button value="hand" class="btn cookieBtn ac-btn">Cookie</button>
    <button value="background" class="btn bowBtn ac-btn">Bow</button>
    <button value="mouth" class="btn consolebtn ac-btn">console</button>
    <button value="mouth" class="btn defaultBtn ac-btn">Default</button>
    `

    // tea
    let teaBtn = styleBtnDiv.querySelector(".teaBtn")
    let tea = document.querySelector(".tea")
    teaBtn.addEventListener("click", () => {
        !cookie.classList.contains("hidden") || !bow.forEach(tri =>  tri.classList.contains("hidden")) || console.classList.contains("console-visible") ? cookie.classList.add("hidden") || bow.forEach(tri =>  tri.classList.add("hidden")) || console.classList.remove("console-visible") : null
        tea.classList.remove("hidden")
    })

    
    // cookie
    let cookieBtn = styleBtnDiv.querySelector(".cookieBtn")
    let cookie = document.querySelector(".cookie")
    cookieBtn.addEventListener("click", () => {
        !tea.classList.contains("hidden") || !bow.forEach(tri =>  tri.classList.contains("hidden")) || console.classList.contains("console-visible") ? tea.classList.add("hidden") || bow.forEach(tri =>  tri.classList.add("hidden")) || console.classList.remove("console-visible") : null
        cookie.classList.remove("hidden")
    })
    
    // bow
    let bowBtn = styleBtnDiv.querySelector(".bowBtn")
    let bow = document.querySelectorAll(".tri")
    bowBtn.addEventListener("click", () => {
        !tea.classList.contains("hidden") || !cookie.classList.contains("hidden") || console.classList.contains("console-visible") ? tea.classList.add("hidden") || cookie.classList.add("hidden") || console.classList.remove("console-visible") : null
        bow.forEach(tri => tri.classList.remove("hidden"))
    })

    // gaming console
    let consolebtn = styleBtnDiv.querySelector(".consolebtn")
    let console = document.querySelector(".console")
    consolebtn.addEventListener("click", () => {
        !cookie.classList.contains("hidden") || !bow.forEach(tri =>  tri.classList.contains("hidden")) || !tea.classList.contains("hidden") ? cookie.classList.add("hidden") || bow.forEach(tri =>  tri.classList.add("hidden")) || tea.classList.add("hidden") : null
        console.classList.add("console-visible")
    })

    // DEFAULT btn
    let defaultBtn = styleBtnDiv.querySelector(".defaultBtn")
    defaultBtn.addEventListener("click", () => {
        !cookie.classList.contains("hidden") || !bow.forEach(tri =>  tri.classList.contains("hidden")) || !tea.classList.contains("hidden") || console.classList.contains("console-visible") ? cookie.classList.add("hidden") || bow.forEach(tri =>  tri.classList.add("hidden")) || tea.classList.add("hidden") || console.classList.remove("console-visible") : null
    })
})


acBtn[2].addEventListener("click", () => {
    styleBtnDiv.innerHTML = `
    <div class="bg-btns">
        <button value="purple" class="bg-btn purple"></button>
        <button value="red" class="bg-btn red"></button>
        <button value="orange" class="bg-btn orange ></button>
        <button value="yellow" class="bg-btn yellow"</button>
        <button value="light-green" class="bg-btn light-green"</button>
        <button value="dark-green" class="bg-btn dark-green"</button>
        <button value="blue" class="bg-btn blue"</button>
        <button value="light-pink" class="bg-btn light-pink"</button>
        <button value="dark-pink" class="bg-btn dark-pink"</button>
    </div>
   `

   let btns = styleBtnDiv.querySelectorAll(".bg-btn ")
   let alpaca = document.querySelector(".alpaca-div")
//    let prevColor = btn.value;

   btns.forEach(btn => {
    btn.addEventListener("click", () => {
        // !prevColor == null ? alpaca.classList.remove(prevColor) : null


        alpaca.classList.add(`${btn.value}`)
        // console.log(btn);
    })
})   


})

acBtn[3].addEventListener("click", () => {
    styleBtnDiv.innerHTML = `
    <div class="bg-btns">
        <button class="angry-btn btn">Angry</button>
        <button class="notorious-btn btn">Notorious</button>
        <button class="suspicious-btn btn">Suspicious</button>
        <button class="default-btn btn">Default</button>
    </div>
   `
    let eye = document.querySelector(".alpaca-eye")
    // angry eye
    let angryBtn = styleBtnDiv.querySelector(".angry-btn")
    angryBtn.addEventListener("click", () => {
        suspiciousBtn.classList.contains("suspicious-eye") ? suspiciousBtn.classList.remove("suspicious-eye") : null
        eye.classList.add("angry-eye")
    })

    // notorious eyes
    let notoriousBtn = styleBtnDiv.querySelector(".notorious-btn")
    notoriousBtn.addEventListener("click", () => {
        eye.classList.contains("angry-eye") || eye.classList.contains("suspicious-eye") ? eye.classList.remove("angry-eye") || eye.classList.remove("suspicious-eye") : null
        eye.classList.add("notorious-eye")
    })
    
    // suspicious eye
    let suspiciousBtn = styleBtnDiv.querySelector(".suspicious-btn")
    suspiciousBtn.addEventListener("click", () => {
        eye.classList.contains("angry-eye") || eye.classList.contains("notorious-eye") ? eye.classList.remove("angry-eye") || eye.classList.remove("notorious-eye") : null
        
        eye.classList.add("suspicious-eye")
    })
    
    // default eye
    let defaultBtn = styleBtnDiv.querySelector(".default-btn")
    defaultBtn.addEventListener("click", () => {
        eye.classList.contains("angry-eye") || eye.classList.contains("notorious-eye") || eye.classList.contains("suspicious-eye") ? eye.classList.remove("angry-eye") || eye.classList.remove("notorious-eye") || eye.classList.remove("suspicious-eye") : null
        
    })
})

acBtn[4].addEventListener("click", () => {
    styleBtnDiv.innerHTML = `
    <div class="bg-btns">
        <button class="headphone-btn btn">Headphones</button>
        <button class="earing-btn btn">Earring</button>
        <button class="cap-btn btn">Cap</button>
        <button class="none-btn btn">None</button>
    </div>
   `

    // headphone
    let headphoneBtn = styleBtnDiv.querySelector(".headphone-btn")
    let headphone = document.querySelector(".headphone")

    headphoneBtn.addEventListener("click", () => {
        !earing.classList.contains("hidden") || !cap.classList.contains("hidden") ? cap.classList.add("hidden") || earing.classList.add("hidden") : null
        headphone.classList.remove("hidden")
    })

    // EARING
    let earingBtn = styleBtnDiv.querySelector(".earing-btn")
    let earing = document.querySelector(".earing")
    
    earingBtn.addEventListener("click", () => {
        !headphone.classList.contains("hidden") || !cap.classList.contains("hidden") ? cap.classList.add("hidden") || headphone.classList.add("hidden") : null
        earing.classList.remove("hidden")
    })

    // cap
    let capBtn = styleBtnDiv.querySelector(".cap-btn")
    let cap = document.querySelector(".cap")
    
    capBtn.addEventListener("click", () => {
        !headphone.classList.contains("hidden") || !earing.classList.contains("hidden") ? headphone.classList.add("hidden") || earing.classList.add("hidden") : null
        cap.classList.remove("hidden")
    })

    // NONE
    let noneBtn = styleBtnDiv.querySelector(".none-btn")
    
    noneBtn.addEventListener("click", () => {
        !headphone.classList.contains("hidden") || !earing.classList.contains("hidden") || !cap.classList.contains("hidden") ? cap.classList.add("hidden") || headphone.classList.add("hidden") || earing.classList.add("hidden") : null
    })
})


