import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

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
} from 'mdb-react-ui-kit';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/register", {
                name,
                email,
                password,
                phone,
                address,
                answer,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <Layout title="Register - MOBI CART ">
            {/* <div className="form-container" style={{ minHeight: "90vh" }}>
                <form onSubmit={handleSubmit}>
                    <h4 className="title">REGISTER FORM</h4>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Name"
                            required
                            autoFocus
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
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
                    <div className="mb-3">
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Phone"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Address"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="What is Your Favorite sports"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        REGISTER
                    </button>
                </form>
            </div> */}


            <MDBContainer fluid>

                <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>
                <form onSubmit={handleSubmit}>
                    <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                        <MDBCardBody className='p-5 text-center' style={{ marginRight: '450px', marginLeft: '450px' }}>

                            <h2 className="fw-bold mb-5">Sign Up</h2>

                            <MDBInput
                                wrapperClass='mb-4'
                                id='form1'
                                type='text'
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <MDBInput
                                wrapperClass='mb-4'
                                id='form1'
                                type='email'
                                placeholder='Enter Your Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <MDBInput
                                wrapperClass='mb-4'
                                id='form1'
                                type='password'
                                placeholder='Enter Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required  // Add the required attribute here
                            />

                            <MDBInput
                                wrapperClass='mb-4'
                                id='form1'
                                type='text'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder='Enter Phone number'
                                required
                            />

                            <MDBInput
                                wrapperClass='mb-4'
                                id='form1'
                                type='text'
                                placeholder='Enter Address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />

                            <MDBInput
                                wrapperClass='mb-4'
                                id='form1'
                                type='text'
                                placeholder='What is favourite Sport'
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                required
                            />

                            <div className='d-flex justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                            </div>
                            <button type="submit"
                                className="btn btn-primary custom-btn-width"
                            >
                                Register
                            </button>

                        </MDBCardBody>
                    </MDBCard>
                </form>
            </MDBContainer>
        </Layout>
    );
};

export default Register;
