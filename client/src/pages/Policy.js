import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
    return (
        <Layout title={'Privacy Policy'}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/contactus.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">

                    <p><b>MOBI CART, We committed to protecting the
                        privacy and security of your personal information.
                    </b></p>
                    <p><i>This Privacy Policy describes how we collect, use, disclose,
                        and protect the information you provide when using our Website
                        mobicart.com. By accessing or using the Website, you consent to the terms and practices outlined
                        in this Privacy Policy.</i></p>

                </div>
            </div>
        </Layout>
    );
};

export default Policy;
