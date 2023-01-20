import React from 'react'

export default function RandomGif(props){

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
        <h4>Search a Giphy Piffy Above ^ </h4>
        <img src={props.gifData}></img>

        </>
    )



}