import React, { useEffect } from "react";
import Sdata from '../components/SData'
import Card from "./Card";

export const Service = () => {
    useEffect(() => {
        document.title = 'Services | Test Amplify'; // Set the desired page title
      }, []);
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
                                key= {index}
                                imgSrc = {val.imgSrc}
                                title = {val.title}
                                description = {val.description}

                                />
                            })
                        }
                    

                    </div>
                    </div>
                </div>

        </div>
        
        
        </>
    )
}

export default Service