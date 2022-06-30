import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState } from "react";

const Main=()=>{
    const [pokeData,setPokeData]=useState([]);

    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")

   

    
    
    return(
        <>
            <div className="container">
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokedex(poke)}/>
                    
                    <div className="btn-group">
                        {  prevUrl && <button onClick={()=>{
                            setPokeData([])
                           setUrl(prevUrl) 
                        }}>Previous</button>}

                        { nextUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}

                    </div>
                </div>
                <div className="right-content">
                   <Pokeinfo data={pokeDex}/>
                </div>
            </div>
        </>
    )
}
export default Main
