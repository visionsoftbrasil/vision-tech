document.addEventListener('onload', main())

function main(){
    const header = document.querySelector('header')
    const espacoHeader = document.getElementsByClassName('espaco-header')
    const heightHeader = header.offsetHeight

    for (let i in espacoHeader){
        
        if (typeof espacoHeader[i] == "object"){
            espacoHeader[i].style.height = `${heightHeader*2}px`
        }
    }
}
