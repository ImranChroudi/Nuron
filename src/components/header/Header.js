import React from 'react' 
import {MdNotificationsNone , MdOutlineLightMode} from 'react-icons/md'
import {useSelector , useDispatch} from 'react-redux'
import NavBarLink from '../linkNavBar/NavBarLink'
import './Header.css'


const Header = ()=>{
  const itemsNavLink=  useSelector(state => state.NFT.itemsNavLink )
  console.log(itemsNavLink)

    return( 
    <header className='border__bottom'>
          <div className='container p-md-0 d-flex justify-content-between gap-2'>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid p-0">
   <div className='logo border__right'>
    <div className='img  img__logo'>
         <img src="/assets/header/logo-white.png" />
    </div>
   </div>
    <button class="btn__icon navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Home page one</a></li>
            <li><a class="dropdown-item" href="#">Home page two</a></li>
            <li><a class="dropdown-item" href="#">Home page three</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link " href="#" >
            About
          </a>
         
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Explore
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link " href="#" >
            Contact
          </a>
        </li>
      
      </ul>
    
    <div className='d-flex align-items-center gap-2'>
    <form class="gap-2 form-inline my-2 my-lg-0 d-flex align-items-center" >
      <input style={{width : 'max-content'}} class="rounded border  mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn__1  my-2 my-sm-0" type="submit">Wallet Connect</button>
      
    </form>
    </div>
  </div>
 </div>
</nav>
<div className='d-flex  align-items-center gap-2'>
          <button className='border flex__center__center position-relative btn__icon'>
              <MdNotificationsNone />
              <p className='flex__center__center position-absolute num__not'>6</p>
          </button>

          <button className='border flex__center__center btn__icon'>
              <MdOutlineLightMode />
          </button>
    </div>
          </div>
    </header>)
}


export default Header