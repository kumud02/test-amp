import React from "react";
import Sdata from '../components/SData'
import Card from "./Card";

export const Service = () => {
    return (
        <>

            <div className="container">
                <div className="row mt-4">
                <h1 className="text-center">Our Services</h1>
                </div>
            </div>
           

            <div className="container mt-5">
            </div>
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="row gy-4">
                            {Sdata.map((val, index) => (
                                <Card
                                    key={index}
                                    imgSrc={val.imgSrc}
                                    title={val.title}
                                    description={val.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;
