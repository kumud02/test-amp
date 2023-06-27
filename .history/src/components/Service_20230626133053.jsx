import React from "react";
import Sdata from '../components/SData'
import Card from "./Card";

const Service = () => {
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>

        </div>

        <div className="container-fluid-mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            Sdata.map((val,index) =>  {
                                return <Card 
                                key= 
                                imgSrc = {val.imgSrc}
                                title = {val.title}

                                />
                            })
                        }
                    
                    <Card />

                    </div>
                    </div>
                </div>

        </div>



        
        
        </>
    )
}


export default Service