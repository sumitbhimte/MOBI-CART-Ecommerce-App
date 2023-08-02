import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";
import "../styles/SearchStyles.css";
const Search = () => {
    const [values, setValues] = useSearch();
    const navigate = useNavigate();
    const [cart, setCart] = useCart();
    return (
        <Layout title={"Search results"}>
            <div className="container">
                <div className="text-center">
                    <h1>Search Resuts</h1>
                    <h6>
                        {values?.results.length < 1
                            ? "No Products Found"
                            : `Found ${values?.results.length}`}
                    </h6>
                    <div className="d-flex flex-wrap mt-4 offset-1">
                        {values?.results.map((p) => (
                            <div className="card m-3" key={p._id} style={{ cursor: "pointer" }}>
                                <img
                                    src={`/api/v1/product/product-photo/${p._id}`}
                                    className="card-img-top"
                                    alt={p.name}
                                    onClick={() => navigate(`/product/${p.slug}`)}
                                />
                                <div className="card-body">
                                    <div className="card-name-price flex-column" onClick={() => navigate(`/product/${p.slug}`)}>
                                        <h5 className="card-title">
                                            {p.name.length > 35 ? p.name.substring(0, 35) + "..." : p.name}</h5>
                                        <h5 className="card-title card-price">
                                            {p.price.toLocaleString("en-US", {
                                                style: "currency",
                                                currency: "INR",
                                                minimumFractionDigits: 0,
                                            })}
                                        </h5>
                                    </div>
                                    <p className="card-text " onClick={() => navigate(`/product/${p.slug}`)}>
                                        {p.description.substring(0, 60)}...
                                    </p>
                                    <div className="card-name-price" id="card-button">
                                        {/* <button
                                            className="btn btn-info ms-1"
                                            onClick={() => navigate(`/product/${p.slug}`)}
                                        >
                                            More Details
                                        </button> */}
                                        <button
                                            className="btn btn-dark ms-1"
                                            onClick={() => {
                                                setCart([...cart, p]);
                                                localStorage.setItem(
                                                    "cart",
                                                    JSON.stringify([...cart, p])
                                                );
                                                toast.success("Item Added to cart");
                                            }}
                                        >
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Search;
