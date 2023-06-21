import React from 'react';
import "./Box.css"



function Box() {
  return (
    <div>
        <div className="customize_box_content">
            <div className="container-max mt-3">
                
                <div className="row border rounded mx-3">

                    <div className="col-lg-3 col-md-6 col-sm-12">
                         <div className="box ">
                            <div className="box_image">
                                <img 
                                src="./images/pic_three.png"
                                className=""
                                alt="firstpic"
                                />
                            </div>
                            <div className="box_text ms-3 ">
                                <h2 className="fw-bold">Free Shipping</h2>
                                <p className="text-secondary"> On all orders over $75.00 </p>
                            </div>
                         </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="box">
                            <div className="box_image">
                            <img 
                                src="./images/icon_cms2.png"
                                className=""
                                alt="secondpic"
                                />
                            </div>
                                <div className="box_text ms-3 ">
                                     <h2 className="fw-bold">Free Returns</h2>
                                     <p className="text-secondary">Returns are free within 9 days </p>
                                 </div>
                    </div>
                         
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="box">
                            <div className="box_image">
                            <img 
                                src="./images/icon_cms3.png"
                                className=""
                                alt="thirdpic"
                                />
                            </div>
                            <div className="box_text ms-3">
                                 <h2 className="fw-bold">100% Payments Secure</h2>
                                 <p className="text-secondary">Your payment are safe with us. </p>
                            </div>
                    </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="box">
                            <div className="box_image">
                            <img 
                                src="./images/icon_cms4.png"
                                className=""
                                alt="fourthpic"
                                />
                            </div>
                            <div className="box_text ms-3">
                                <h2 className="fw-bold">Support 24/7</h2>
                                <p className="text-secondary">Contact us 24hrs a day </p>
                            </div>
                    </div>
                    </div>

                </div>

            </div>

        </div>
      
    </div>
  );
}

export default Box;
