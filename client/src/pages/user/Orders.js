import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";
import "../styles/OrdersStyles.css";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [auth, setAuth] = useAuth();
    const getOrders = async () => {
        try {
            const { data } = await axios.get("/api/v1/auth/orders");
            setOrders(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (auth?.token) getOrders();
    }, [auth?.token]);
    return (
        <Layout title={"Your Orders"}>
            <div className="container-flui p-3 m-3 dashboard">
                <div className="row">
                    <div className="col-md-3 my-5">
                        <UserMenu />
                    </div>
                    <div className="col-md-9 mt-5">
                        <h1 className="text-center">All Orders</h1>
                        {orders?.map((o, i) => {
                            return (
                                <div className="border shadow ">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Order No</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Buyer</th>
                                                <th scope="col"> date</th>
                                                <th scope="col">Payment</th>
                                                <th scope="col">Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{o?.status}</td>
                                                <td>{o?.buyer?.name}</td>
                                                <td>{moment(o?.createAt).fromNow()}</td>
                                                <td>{o?.payment.success ? "Success" : "Failed"}</td>
                                                <td>{o?.products?.length}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="container mx-2 pt-1" id="container_id">
                                        {o?.products?.map((p, i) => (
                                            <div className="row mb-3 p-3 card w-100 flex-row" key={p._id}>
                                                <div className="col-4">
                                                    <img id="ttt"
                                                        src={`/api/v1/product/product-photo/${p._id}`}
                                                        className="card-img-top"
                                                        alt={p.name}
                                                    />
                                                </div>
                                                <div className="col-8 my-2">
                                                    <p><b>{p.name}</b></p>
                                                    {/* <p>{p.description}</p> */}
                                                    <p>Price : ₹ {p.price}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Orders;
