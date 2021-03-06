import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
function Rooms() {
    return (
        <Hero hero="roomsHero">
            <Banner title="our Rooms">
                <Link to='/' className="btn-primary">
                    return home
       </Link>
            </Banner>
        </Hero>
    )
}

export default Rooms