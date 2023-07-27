import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/login", {
                email,
                password,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate(location.state || "/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <Layout title="Login - MOBI CART">
            {/* <div className="form-container " style={{ minHeight: "90vh" }}>
                <form onSubmit={handleSubmit}>
                    <h4 className="title">LOGIN FORM</h4>

                    <div className="mb-3">
                        <input
                            type="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Email "
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter Your Password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        LOGIN
                    </button>

                    <div className="mb-3 my-2" style={{ cursor: "pointer" }}>
                        <p
                            type="text"
                            class="clickable"
                            color="darkblue"
                            cursor="pointer"
                            onClick={() => {
                                navigate("/forgot-password");
                            }}
                        ><i><u> Forgot Password.?
                        </u></i>
                        </p>
                    </div>

                </form>
            </div> */}
            <MDBContainer fluid>

                <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>
                <form onSubmit={handleSubmit}>
                    <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                        <MDBCardBody className='p-5 text-center' style={{ marginRight: '450px', marginLeft: '450px' }}>

                            <h2 className="fw-bold mb-5">Sign In</h2>

                            <MDBRow>
                                {/* <MDBCol col='6'>
                                <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' placeholder="Name " />
                            </MDBCol> */}

                                {/* <MDBCol col='6'>
                                <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' />
                            </MDBCol> */}
                            </MDBRow>

                            <MDBInput
                                wrapperClass='mb-4'
                                id='form1'
                                type='email'
                                placeholder='Enter Your Email'
                                onChange={(e) => setEmail(e.target.value)}
                                required  // Add the required attribute here
                            />
                            <MDBInput
                                wrapperClass='mb-4'
                                id='form1'
                                type='password'
                                placeholder='Enter Password'
                                onChange={(e) => setPassword(e.target.value)}
                                required  // Add the required attribute here
                            />

                            {/* <div className='d-flex justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                            </div> */}

                            <button type="submit"
                                className="btn btn-primary custom-btn-width"
                            >
                                Login
                            </button>
                            <div className="mb-3 my-2" style={{ cursor: "pointer" }}>
                                <p
                                    type="text"
                                    class="clickable"
                                    color="darkblue"
                                    cursor="pointer"
                                    onClick={() => {
                                        navigate("/forgot-password");
                                    }}
                                ><i><u> Forgot Password.?
                                </u></i>
                                </p>
                            </div>

                        </MDBCardBody>
                    </MDBCard>
                </form>
            </MDBContainer>
        </Layout>
    );
};

export default Login;
