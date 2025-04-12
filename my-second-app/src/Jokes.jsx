import { useEffect, useState } from "react";

export default function Jokes() {

    const [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () => {
        let response = await fetch(URL);
        let data = await response.json();
        // console.log(data);
        
        setJoke({
            setup: data.setup,
            punchline: data.punchline
        });
    }
    
    useEffect(() => {
        const getFirstJoke = async () => {
            let response = await fetch(URL);
            let data = await response.json();

            setJoke({
                setup: data.setup,
                punchline: data.punchline
            });
        };
        getFirstJoke();
    }, []);

    return (
        <>
            <h1>Jokes!</h1>
            <h2>{joke.setup}</h2>
            <h3>{joke.punchline}</h3>
            <button onClick={getNewJoke}>Get a new Joke</button>
        </>
    )
}