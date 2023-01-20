import React from 'react'

export default function RandomGiffy(props){

    // const[formInput, setFormInput] = useState({

    // })

    // function handleChange(e) {
    //     console.log(e.target.name);
    
    //     setFormInput({
    //       ...formInput,
    //       [e.target.name]: e.target.value,
    //     });
    //     console.log(e.target.value);
    //   }


    return(
        <>
        <img src={props.RandomGif}></img>
        </>
    )



}