// create your App component here
import React, { useEffect, useState } from "react";

function App(){
    const [dogBreeds, setDogBreeds] = useState([])
    const[loading, setLoading] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setDogBreeds(data.message)
            setLoading(true)
        })
    })
    if(!loading) return <p>Loading...</p>
    return(
        <div>
            <img src={dogBreeds} alt="A Random Dog" />
        </div>
    )
}

export default App