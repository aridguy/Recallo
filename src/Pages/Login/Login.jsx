import React from "react";
import Logo from '../../Assets/Logo.png'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LargeBg from '../../Assets/mainBg.png'
import Arrow from '../../Assets/arrow-right-circle.svg'
import { useNavigate } from "react-router-dom";



const Login = () => {
    const navigate = useNavigate();
    const GoHome = () =>{
        navigate('/home');
    }

    const Styles = {
        buttonStyles: {
          backgroundColor: "#336799",
          
        }
    }
        const Styles2 = {
            atyles: {
              color: "black",


              
            }
    }

    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-light navbar-dark ">
                <div class="container">
                    <img className="navbar-brand ml-4" src={Logo} alt="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a style={Styles2.atyles} className="nav-link" href="localhost:3000">Login</a>
                            </li>
                            <li className="nav-item">
                                <a style={Styles2.atyles} className="nav-link" href="localhost:3000">Creat an Account</a>
                            </li>
                            <li  className="nav-item">
                                <a style={Styles2.atyles} className="nav-link" href="localhost:3000">Contact Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <img className="backg2" src={LargeBg} alt="latrge" />
            <div className="container mt-5">
                <div className="row">

                    <div className="col-md-5">
                        <div className="wrapLogin">
                            <div className="LoginHeader">
                                <h1 className="LoginTitle">Login</h1>
                                <p className="details text-dark">Please enter your email address and password</p>
                            </div>
                            <div className="loginBox">
                                <form>
                                    <input className="email mb-5" placeholder="Email Address" />
                                    <input className="passworded" placeholder="Password" />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="remember"> <input type="checkbox" className="form-check-input" /> Remember me</div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="forgot"><p>Forgot Your Password</p></div>
                                        </div>
                                    </div>
                                    <div className="btnBox">
                                    
                                        <button onClick={GoHome} style={Styles.buttonStyles} className="btn btn-secondary btn-block botin">
                                            Login
                                            <img className="arrow" src={Arrow} alt="arrow right circle" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-7">

                    </div>

                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-muted txtFoot">Back to website</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Login