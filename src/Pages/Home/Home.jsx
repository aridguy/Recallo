import React from "react";
import Logo from '../../Assets/Logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import Homes from '../../Assets/Iconics/hpme.svg'
import Calls from '../../Assets/Iconics/calls.svg'
import Contacts from '../../Assets/Iconics/contact.svg'
import Personnel from '../../Assets/Iconics/personnel.svg'
import Analytics from '../../Assets/Iconics/analytics.svg'
import Tickets from '../../Assets/Iconics/tickets.svg'

const Home = () => {
    // <a style={Styles2.atyles} className="nav-link" href="localhost:3000">Contact Support</a>

    return (

        <div>

            <nav class="navbar navbar-expand-sm bg-muted navbar-light">
                <div class="container">
                    <img className="navbar-brand ml-4" src={Logo} alt="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <div className="profile text-center justify-items-center"><b className="p-txt">AM</b></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="modals">
                <div className="container">
                    <div className="row">
                    <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="modalProfiles">
                                <b className="p-txt">AM</b>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
            <div className="universalWrap">
                <div className="sidebar">
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <div className="profile2"><b className="p-txt2">AM</b></div>
                                <i className="fa fa-caret"></i>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12 text-center">
                                <p className="extraTxt">AutoMedics Africa Limited</p>
                                <small>2 agents license</small>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                <button className="botins">Manage your Recallo Account</button>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="pagesWrap">
                                    <div className="pagesBox mb-1">
                                        <img alt="home" src={Homes} />&nbsp;<page>Home</page>
                                    </div>
                                    <div className="pagesBox mb-1">
                                        <img alt="home" src={Calls} /><page>Calls</page>
                                    </div>
                                    <div className="pagesBox mb-1">
                                        <img alt="home" src={Contacts} />&nbsp;<page>Contact</page>
                                    </div>
                                    <div className="pagesBox mb-1">
                                        <img alt="home" src={Personnel} /><page>Personnel</page>
                                    </div>
                                    <div className="pagesBox mb-1">
                                        <img alt="home" src={Analytics} />&nbsp;<page>analytics</page>
                                    </div>
                                    <div className="pagesBox mb-1">
                                        <img alt="home" src={Tickets} /><page>Tickets</page>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <hr />
                        <div className="text-center logout mt-5">Log out</div>
                    </div>


                </div>

                <div className="container-fluid section2">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 section2Txt">
                            <div className=""></div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>

            </div>


        </div>
    )
}
export default Home