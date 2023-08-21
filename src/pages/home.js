import React, { useEffect, useState } from "react"

import Header from '../components/header'
import Footer from '../components/footer'
import logements from '../data/logements.json'
import Appart from '../components/appart'


const Home = () => {
    const [apparts, setApparts] = useState([])
    useEffect(() => {
        setApparts(() => logements)
    }, [])

    return (
        <div className="general_container">
            
            <Header />
            
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            </div>


            <div className="logements">
                {apparts.map((appart) => <Appart data={appart} key={appart.id}/> )}
            </div>
            <Footer />
        </div>
    )
}

export default Home