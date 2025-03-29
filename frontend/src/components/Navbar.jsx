import React from 'react'
import {assets} from '../assests/assets'

const Navbar = () => {
  return (
    <div>
        <img src="{assets.logo}" alt="" />
        <ul>
            <Navlink>
                <li> HOME </li>
                <hr />
            </Navlink>
            <Navlink>
                <li> ALL DOCTORS </li>
                <hr />
            </Navlink>
            <Navlink>
                <li> ABOUT </li>
                <hr />
            </Navlink>
            <Navlink>
                <li> CONTACT </li>
                <hr />
            </Navlink>
        </ul>
    </div>
  )
}

export default Navbar