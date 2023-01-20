import { useState, useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RandomGif from './RandomGif/RandomGif'
import Form from './Form/Form'

function App() {
  const [gif, setGif] = useState('')
  const [formInput, setFormInput] = useState('')
  // const [count, setCount] = useState(0)



  // LIFT FORM INPUT FROM FORM
  function liftFormInput(formInput){
    setFormInput(formInput)
  }

    useEffect(() => {
      console.log("use Effect Working")
      const searchGiphy = `https://api.giphy.com/v1/gifs/search?api_key=1UfkR8w9lpxXouKWO5o2qE9Q17bKVJJU&q=${formInput}&limit=25&offset=0&rating=g&lang=en`
      const gifFromGiphy = `https://api.giphy.com/v1/gifs/random?api_key=1UfkR8w9lpxXouKWO5o2qE9Q17bKVJJU&tag=&rating=r`

      async function makeApiCall(){
        try{
          const responseJson = await fetch(searchGiphy);
          console.log(responseJson)

          const data = await responseJson.json()
          console.log(data, 'OBJECT ---------------------')

          setGif(data.data[0].images.original.url)
        } catch(err){
          console.log(err)

        }
      }

      makeApiCall()
    },[formInput])




  return (
    <div className='App'>
      <h2> GIPHY PIFFY </h2>
      <Form liftFormInput={liftFormInput}/>
      <RandomGif gifData={gif}/>
    </div>
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src="/vite.svg" className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </div>
  )
}

export default App
