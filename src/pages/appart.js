import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import logements from '../data/logements.json'

const Appart = () => {
    const {appart , setAppart} = useState({})
    const { id } = useParams()    
    useEffect(()=>{        
       getAppart(id)
           }, [])
    const getAppart = (appartId) => {
        const log = logements.filter(logement => logement.id === appartId)
        console.log(log[0])
    }
    return(
        <div className="appartement">
            <div className="carourel">
                <h1>Caroussel</h1>
            </div>
            <div className="row">
                <div className="col-md">
                    {/* <h1>{appart.title}</h1> */}
                </div>
            </div>
        </div>
    )
}





export default Appart