import React from 'react'
import {assets} from '../assests/assets'

const Navbar = () => {
  return (

    <div className='flex item-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
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
        <div>
            <button>Create Account</button>
        </div>
    </div>
  )
}

export default Navbar