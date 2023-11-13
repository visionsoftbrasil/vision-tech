window.addEventListener('onload', main())

function main(){
    const header = document.querySelector('header')
    const espacoHeader = document.getElementsByClassName('espaco-header')
    const heightHeader = header.offsetHeight
    const menu = document.getElementById('menu')
    const links = document.getElementsByClassName('links')[0]
    const imgSlide = document.getElementById('imgSlide')
    const next = document.getElementById('next')
    const prev = document.getElementById('prev')
    const slides = document.getElementsByClassName('slide')
    const containerSlides = document.getElementById('containerSlides')

    let menuOpen = false

    let dist = []
    let counter = 0

    let auto = true

    menu.addEventListener('click', handleMenu)

    for (let i in espacoHeader){
        
        if (typeof espacoHeader[i] == "object"){
            espacoHeader[i].style.height = `${heightHeader*2}px`
        }
    }

    const interval = setInterval(() => {
    if (auto) nextSlide() 
    else return
    }, 5000)

    for(let i = 0; i < slides.length; i++){
        dist.push((imgSlide.offsetWidth+32)*i)
    }

    next.addEventListener('click', () => {
        nextSlide()
        auto = false
        setTimeout(() => {
            if (auto) {
                return
            }else auto = true
        }, 10000)
    })

    prev.addEventListener('click', () => {
        prevSlide()
        auto = false
        setTimeout(() => {
            if (auto) {
                return
            }else auto = true
        }, 10000)
    })

    function handleMenu() {
        if (!menuOpen) {
            links.classList.add('more-height')     
        }else {
            links.classList.remove('more-height')
        }
        menuOpen = !menuOpen
    }

    function nextSlide(){
        counter += 1
        if (counter >= slides.length) {
            containerSlides.style.transform = `translateX(${dist[0]}px)`
            counter = 0
            return
        }
        containerSlides.style.transform = `translateX(-${dist[counter]}px)`
    }

    function prevSlide(){
        if (counter == 0) {
            containerSlides.style.transform = `translateX(-${dist[dist.length-1]}px)`
            counter = dist.length-1
            return
        }
        counter -= 1
        containerSlides.style.transform = `translateX(-${dist[counter]}px)`
    }
}
