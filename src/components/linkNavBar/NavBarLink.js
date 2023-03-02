import React , {useState} from 'react'
import {NavLink} from 'react-router-dom'



const NavBarLink = ({item})=>{

  const [displayMenuNavLink , setDisplayMenuNavLink]= useState('')

  console.log(displayMenuNavLink)

  const {navLink , menuNavLink  } = item;
  console.log(menuNavLink)
    return (
     <>
     <li class="nav-item dropdown">
            <a className="nav-link dropdown-toggle" onClick={()=>setDisplayMenuNavLink(navLink)} >{navLink}</a>
       {
         menuNavLink &&  
           (<ul className={displayMenuNavLink === navLink ? "dropdown-menu active" : "dropdown-menu"} >
             { menuNavLink.map((item , key)=>(
                   <li key={key}><NavLink className="dropdown-item" to={`${item}`}>{item}</NavLink></li>
              ))
               }
           </ul>)
        }
      </li>
     </>
    )
}

export default NavBarLink