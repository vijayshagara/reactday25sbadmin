import React, { useState } from 'react'
import Header from './header'
import SideBar from './sidebar'
import { Collapse } from 'bootstrap'
import { Link, NavLink } from 'react-router-dom'
//import { useState } from 'react'

function Animation() {

    const [dropDownToggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!dropDownToggle)
        var dropToggle = document.getElementById("dropDownCollapse");
        var myDropToggle = new Collapse(dropToggle);
        dropDownToggle ? myDropToggle.show() : myDropToggle.hide();
    }
    const [dropDownToggle1, setToggle1] = useState(false)
    const handleToggle1 = () => {
        setToggle1(!dropDownToggle1)
        var dropToggle = document.getElementById("navbarDropdown");
        var myDropToggle = new Collapse(dropToggle);
        dropDownToggle ? myDropToggle.show() : myDropToggle.hide();
    }
    const [dropDownToggle2, setToggle2] = useState(false)
    const handleToggle2 = () => {
        setToggle2(!dropDownToggle2)
        var dropToggle = document.getElementById("dropdownMenuButton");
        var myDropToggle = new Collapse(dropToggle);
        dropDownToggle ? myDropToggle.show() : myDropToggle.hide();
    }

    return (
        <div>
            <div id="wrapper">

                {/*                 <!-- Sidebar --> */}
                <SideBar />
                {/*                                 <!-- End of Sidebar --> */}

                {/*                                 <!-- Content Wrapper --> */}
                <div id="content-wrapper" class="d-flex flex-column">

                    {/*                                     <!-- Main Content --> */}
                    <div id="content">

                        {/*                                         <!-- Topbar --> */}
                        <Header />
                        {/*                                         <!-- End of Topbar --> */}

                        {/*                                         <!-- Begin Page Content --> */}
                        <div class="container-fluid">

                            {/*                                             <!-- Page Heading --> */}
                            <h1 class="h3 mb-1 text-gray-800">Animation Utilities</h1>
                            <p class="mb-4">Bootstrap's default utility classes can be found on the official <a
                                href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                                below were created to extend this theme past the default utility classes built into Bootstrap's
                                framework.</p>

                            {/*                                             <!-- Content Row --> */}
                            <div class="row">

                                {/*                                                 <!-- Grow In Utility --> */}
                                <div class="col-lg-6">

                                    <div class="card position-relative">
                                        <div class="card-header py-3">
                                            <h6 class="m-0 font-weight-bold text-primary">Grow In Animation Utilty</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <code>.animated--grow-in</code>
                                            </div>
                                            <div class="small mb-1">Navbar Dropdown Example:</div>
                                            <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                                                <a class="navbar-brand" href="#">Navbar</a>
                                                <ul class="navbar-nav ml-auto">
                                                    <li class="nav-item dropdown">
                                                        <Link class="nav-link dropdown-toggle" onClick={() => handleToggle()} 
                                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                            Dropdown
                                                        </Link>
                                                        <div id="dropDownCollapse" class="dropdown-menu dropdown-menu-right animated--grow-in"
                                                            aria-labelledby="navbarDropdown">
                                                            <Link class="dropdown-item" to={"/animation"} >Action</Link>
                                                            <Link class="dropdown-item" to={"/animation"} >Another action</Link>
                                                            <div class="dropdown-divider"></div>
                                                            <Link class="dropdown-item" to={"/animation"} >Something else here</Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </nav>
                                            <p class="mb-0 small">Note: This utility animates the CSS transform property,
                                                meaning it will override any existing transforms on an element being animated!
                                                In this theme, the grow in animation is only being used on dropdowns within the
                                                navbar.</p>
                                        </div>
                                    </div>

                                </div>

                                {/*                                                 <!-- Fade In Utility --> */}
                                <div class="col-lg-6">

                                    <div class="card position-relative">
                                        <div class="card-header py-3">
                                            <h6 class="m-0 font-weight-bold text-primary">Fade In Animation Utilty</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <code>.animated--fade-in</code>
                                            </div>
                                            <div class="small mb-1">Navbar Dropdown Example:</div>
                                            <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                                                <a class="navbar-brand" href="#">Navbar</a>
                                                <ul class="navbar-nav ml-auto">
                                                    <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle" onClick={() => handleToggle1()} href="#" 
                                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                            Dropdown
                                                        </a>
                                                        <div id="navbarDropdown" class="dropdown-menu dropdown-menu-right animated--fade-in"
                                                            aria-labelledby="navbarDropdown">
                                                            <a class="dropdown-item" href="#">Action</a>
                                                            <a class="dropdown-item" href="#">Another action</a>
                                                            <div class="dropdown-divider"></div>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </nav>
                                            <div class="small mb-1">Dropdown Button Example:</div>
                                            <div class="dropdown mb-4">
                                                <button class="btn btn-primary dropdown-toggle" type="button" onClick={() => handleToggle2()}
                                                    data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    Dropdown
                                                </button>
                                                <div id="dropdownMenuButton" class="dropdown-menu animated--fade-in"
                                                    aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                            <p class="mb-0 small">Note: This utility animates the CSS opacity property, meaning
                                                it will override any existing opacity on an element being animated!</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                        {/*                                         <!-- /.container-fluid --> */}

                    </div>
                    {/*                                     <!-- End of Main Content --> */}

                    {/*                                     <!-- Footer --> */}
                    <footer class="sticky-footer bg-white">
                        <div class="container my-auto">
                            <div class="copyright text-center my-auto">
                                <span>Copyright &copy; Your Website 2020</span>
                            </div>
                        </div>
                    </footer>
                    {/*                                     <!-- End of Footer --> */}

                </div>
                {/*                                 <!-- End of Content Wrapper --> */}

            </div>
            {/*                             <!-- End of Page Wrapper --> */}

            {/*                             <!-- Scroll to Top Button--> */}
            <a class="scroll-to-top rounded" href="#page-top">
                <i class="fas fa-angle-up"></i>
            </a>

            {/*                             <!-- Logout Modal--> */}
            <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a class="btn btn-primary" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Animation