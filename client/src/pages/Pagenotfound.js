import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import toast from 'react-hot-toast';

const notify = () => toast("Here is my toast!");
const sucessNotify = () => toast.success("Sucess! time");
const errorNotify = () => toast.error("Error");

const Pagenotfound = () => {
    return (
        <Layout title={'Page not found'}>
            <div className="pnf">
                <h1 className="pnf-title">404</h1>
                <h2 className="pnf-heading">Oops ! Page Not Found</h2>
                <Link to="/" className="pnf-btn">
                    Go Back
                </Link>
                <button onClick={notify}>Make me a toast</button>
                <button onClick={sucessNotify}>Make me a sucess toast</button>
                <button onClick={errorNotify}>Make me a error toast</button>
                
            </div>
        </Layout>
    );
};

export default Pagenotfound;
