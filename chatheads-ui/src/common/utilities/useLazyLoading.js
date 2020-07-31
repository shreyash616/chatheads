import {useEffect, useState} from 'react'

const scrollDown = (fnc, delayTime) => {
    let inScroll
    return function () {
        clearTimeout(inScroll)
        inScroll = setTimeout(()=>{
            fnc.apply(this,arguments)
        },delayTime)
    }
}

const lazyLoading = loadItems => {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', scrollDown(handleScrolling, 500))
        return () => window.removeEventListener('scroll', debounce(handleScrolling, 500))
    }, [])
    
    useEffect(()=>{
        if(isLoading){
            loadItems()
        }
    }, [isLoading])

    const handleScrolling = () => {
        if(!((window.innerHeight + window.scrollY) < document.body.offsetHeight || isFetching)){
            setIsLoading(true)
        }
    }

    return [isLoading, setIsLoading]
}

export default lazyLoading

