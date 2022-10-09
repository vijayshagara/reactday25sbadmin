import React, { useState,useEffect } from "react";
import { Collapse } from 'bootstrap'
import { Link } from "react-router-dom";
import img from "../img/undraw_rocket.svg";


function SideBar() {

    const [toggle, setToggle] = useState(false);
    const [fullSide,setfullSide] = useState(true)
    const handleToggle = () => {
        setToggle(!toggle)
        var myCollapse = document.getElementById('collapseComponents')
        var bsCollapse = new Collapse(myCollapse)
        toggle ? bsCollapse.show() : bsCollapse.hide();
    }

    const [toggleUtilities,setToggleUtilities] = useState(false)
    const handleToggleUtilitie = ()=>{
        setToggleUtilities(!toggleUtilities)
        var myCollapse = document.getElementById('collapseUtilities');
        var bsCollapse = new Collapse(myCollapse);
        toggleUtilities ? bsCollapse.show() : bsCollapse.hide();
    }

    const [togglePages,setPagesToggle] = useState(false)
    const handleTogglePages = () =>{
        setPagesToggle(!togglePages)
        var myCollapse = document.getElementById('collapsePages');
        var bsCollapse = new Collapse(myCollapse);
        togglePages ? bsCollapse.show() : bsCollapse.hide();
        //setfullSide(!fullSide)

    }

    const [toggleSideBar,setToggleSideBar] = useState(false)
    const handleSideBarToggle = () =>{
        console.log("cliclme");
        setfullSide(!fullSide)
            console.log(fullSide)
        
            var ul =  document.querySelector("#accordionSidebar")
             ul.classList.remove('sidebar')
             console.log(ul)
            
        
        setToggleSideBar(!toggleSideBar)
        var myCollapse = document.getElementById('barToggle');
        var bsCollapse = new Collapse(myCollapse);
        togglePages ? bsCollapse.show() : bsCollapse.hide();

    }
    console.log(fullSide)
    // useEffect(()=>{
    //     handleSideBarToggle()
    // },[])

    return (
<>
       { fullSide ? (<div>
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <Link class="sidebar-brand d-flex align-items-center justify-content-center" to={'/dashboard'}>
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </Link>

                <div class="sidebar-divider my-0">

                    <li class="nav-item active">
                        <Link class="nav-link" to={'/dashboard'}>
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></Link>
                    </li>

                    <div class="sidebar-divider">

                        <div class="sidebar-heading">
                            Interface
                        </div>

                        <li class="nav-item">
                            <a class="nav-link collapsed" onClick={() => handleToggle()} data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <i class="fas fa-fw fa-cog"></i>
                                <span>Components</span>
                            </a>
                            <div id="collapseComponents" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                <div class="bg-white py-2 collapse-inner rounded">
                                    <h6 class="collapse-header">Custom Components:</h6>
                                    <Link class="collapse-item" to={'/buttons'} >Buttons</Link>
                                    <Link class="collapse-item" to={'/cards'}>Cards</Link>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link collapsed" onClick={handleToggleUtilitie} data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <i class="fas fa-fw fa-wrench"></i>
                                <span>Utilities</span>
                            </a>
                            <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div class="bg-white py-2 collapse-inner rounded">
                                    <h6 class="collapse-header">Custom Utilities:</h6>
                                    <Link class="collapse-item" to={'/colors'}>Colors</Link>
                                    <Link class="collapse-item" to={'/border'}>Borders</Link>
                                    <Link class="collapse-item" to={'/animation'}>Animations</Link>
                                    <Link class="collapse-item" to={'/other'} >Other</Link>
                                </div>
                            </div>
                        </li>

                        <div class="sidebar-divider">

                            <div class="sidebar-heading">
                                Addons
                            </div>

                            <li class="nav-item">
                                <a class="nav-link collapsed" onClick={handleTogglePages} data-toggle="collapse" data-target="#collapsePages"
                                    aria-expanded="true" aria-controls="collapsePages">
                                    <i class="fas fa-fw fa-folder"></i>
                                    <span>Pages</span>
                                </a>
                                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                    <div class="bg-white py-2 collapse-inner rounded">
                                        <h6 class="collapse-header">Login Screens:</h6>
                                        <Link class="collapse-item" to={'/'} >Login</Link>
                                        <Link class="collapse-item" to={'/register'} >Register</Link>
                                        <Link class="collapse-item" to={'/forgetpass'} >Forgot Password</Link>
                                        <div class="collapse-divider"></div>
                                        <h6 class="collapse-header">Other Pages:</h6>
                                        <Link class="collapse-item" to={'/error'}>404 Page</Link>
                                        <Link class="collapse-item" to={'/blank'}>Blank Page</Link>
                                    </div>
                                </div>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to={'/chart'}>
                                    <i class="fas fa-fw fa-chart-area"></i>
                                    <span>Charts</span></Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to={'/table'}>
                                    <i class="fas fa-fw fa-table"></i>
                                    <span>Tables</span></Link>
                            </li>

                            <ul class="sidebar-divider d-none d-md-block">

                                <div class="text-center d-none d-md-inline" onClick={handleSideBarToggle} id="barToggle">
                                    <button class="rounded-circle border-0" id="sidebarToggle"></button>
                                </div>
     
                                <div class="sidebar-card d-none d-lg-flex">
                                    <img class="sidebar-card-illustration mb-2" src={img} alt="..." />
                                    <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                                    <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
                                </div>

                            </ul>
                        </div>
                    </div>
                </div>
            </ul >

        </div>):(
            <>
            <div>
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <Link class="sidebar-brand d-flex align-items-center justify-content-center" to={'/dashboard'}>
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-laugh-wink"></i>
                    </div>
                    {/* <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup>
                    </div> */}
                </Link>

                <div class="sidebar-divider my-0">

                    <li class="nav-item active">
                        <Link class="nav-link" to={'/dashboard'}>
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            {/* <span>Dashboard</span> */}
                            </Link>
                    </li>

                    <div class="sidebar-divider">

                        <div class="sidebar-heading">
                            Interface
                        </div>

                        <li class="nav-item">
                            <a class="nav-link collapsed" onClick={() => handleToggle()} data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <i class="fas fa-fw fa-cog"></i>
                                {/* <span>Components</span> */}
                            </a>
                            <div id="collapseComponents" class="collapse" aria-labelledby="headingTwo" /* data-parent="#accordionSidebar" */>
                                <div class="bg-white py-2 collapse-inner rounded">
                                    <h6 class="collapse-header">Custom Components:</h6>
                                    <Link class="collapse-item" to={'/buttons'} >Buttons</Link>
                                    <Link class="collapse-item" to={'/cards'}>Cards</Link>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link collapsed" onClick={handleToggleUtilitie} data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <i class="fas fa-fw fa-wrench"></i>
                                {/* <span>Utilities</span> */}
                            </a>
                            <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div class="bg-white py-2 collapse-inner rounded">
                                    <h6 class="collapse-header">Custom Utilities:</h6>
                                    <Link class="collapse-item" to={'/colors'}>Colors</Link>
                                    <Link class="collapse-item" to={'/border'}>Borders</Link>
                                    <Link class="collapse-item" to={'/animation'}>Animations</Link>
                                    <Link class="collapse-item" to={'/other'} >Other</Link>
                                </div>
                            </div>
                        </li>

                        <div class="sidebar-divider">

                            <div class="sidebar-heading">
                                Addons
                            </div>

                            <li class="nav-item">
                                <a class="nav-link collapsed" onClick={handleTogglePages} data-toggle="collapse" data-target="#collapsePages"
                                    aria-expanded="true" aria-controls="collapsePages">
                                    <i class="fas fa-fw fa-folder"></i>
                                    {/* <span>Pages</span> */}
                                </a>
                                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                    <div class="bg-white py-2 collapse-inner rounded">
                                        <h6 class="collapse-header">Login Screens:</h6>
                                        <Link class="collapse-item" to={'/'} >Login</Link>
                                        <Link class="collapse-item" to={'/register'} >Register</Link>
                                        <Link class="collapse-item" to={'/forgetpass'} >Forgot Password</Link>
                                        <div class="collapse-divider"></div>
                                        <h6 class="collapse-header">Other Pages:</h6>
                                        <Link class="collapse-item" to={'/error'}>404 Page</Link>
                                        <Link class="collapse-item" to={'/blank'}>Blank Page</Link>
                                    </div>
                                </div>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to={'/chart'}>
                                    <i class="fas fa-fw fa-chart-area"></i>
                                    {/* <span>Charts</span> */}
                                    </Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to={'/table'}>
                                    <i class="fas fa-fw fa-table"></i>
                                    {/* <span>Tables</span> */}
                                    </Link>
                            </li>

                            <ul class="sidebar-divider d-none d-md-block">

                                <div class="text-center d-none d-md-inline" onClick={handleSideBarToggle} id="barToggle">
                                    <button class="rounded-circle border-0" id="sidebarToggle"></button>
                                </div>
     
                                <div class="sidebar-card d-none d-lg-flex">
                                    <img class="sidebar-card-illustration mb-2" src={img} alt="..." />
                                    <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                                    <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
                                </div>

                            </ul>
                        </div>
                    </div>
                </div>
            </ul >

        </div>
            </>
        )}

        </>
    )
}

export default SideBar;