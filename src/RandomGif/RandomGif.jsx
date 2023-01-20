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
        <div>Please Refresh To Change Gif Piffy</div>
        <img src={props.gifData.url}></img>

        </>
    )



}