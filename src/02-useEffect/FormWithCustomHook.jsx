import { useEffect } from "react"
import { useForm } from "../hooks/useForm"


export const FormWithCustomHook = () => {


    const { formState, onInputChange, onResetForm, username, email, password} = useForm ({
        username: '',
        email: '',
        password:''
    })

    // const { username, email, password} = formState;

    useEffect ( () => {
        // console.log('useEfect Called')
    }, [ ])

    useEffect ( () => {
        // console.log('formState Change')
    }, [ formState])


    useEffect ( () => {
        // console.log('Email Change')
    }, [ email])

    

    return (

    <>
        <h1>Formulario Con Custom Hooks</h1>
        <hr />

        <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange}/>
        <input type="email" className="form-control mt-2" placeholder="hernan@gmail.com" name="email" value={email} onChange={onInputChange} />
        <input type="password" className="form-control mt-2" placeholder="constraseña" name="password" value={password} onChange={onInputChange} />

        <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
    </>
    
    
  )
}
