import {  useRef, useState, useLayoutEffect} from "react";
import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"


export const Layout = () => {


    const { counter , increment} = useCounter(1);
    const { data, isLoading, hasError} = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/'+ counter)
    const {quote, author} = !!data && data[0]
    const [boxSize, setBoxSize] = useState({width: 0, height: 0})
  
    const pRef = useRef()



    useLayoutEffect(() => {
        if (pRef.current) {
            const { width, height } = pRef.current.getBoundingClientRect()
            setBoxSize({ width, height })
        }
    }, [quote])


    return (
    <>
        <h1>Breaking Bad Quotes</h1>
        <hr />

        {
            isLoading
            ?(
                <div className="alert alert-info text-center">Loading...</div>
            ) 
            :(
                <blockquote className="blockquote text-end" style={{display:'flex'}}>
                    <p ref={ pRef } className="mb-1">{quote}</p>
                    <footer className="blockquote-footer">{author} </footer>
                </blockquote>
            )

        }

        <button className="btn btn-primary" disabled={isLoading} onClick={() => increment (1)}>Next quote</button>
        <code>{JSON.stringify(boxSize)}</code>
    
    </>
    
  )
}
