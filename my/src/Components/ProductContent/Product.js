import React from 'react';
import "./Product.css";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
function Product() {
  return (
    <div >

        <div className='customize_product mx-3 my-3'>
            {/*hading starts  */}
            <div className='product_heading'>
                <div className=''><h3 className='text-capitalize'>best seller</h3></div>
                <div className=''><p className='text-secondary'>Add bestselling products to weekly line up </p></div>
            </div>
            {/* heading ends */}

            <div className='product_details'>
                {/*  */}
               <div className='row'>
                    {/* col one */}
                <div className='col-lg-2  border  mx-3 my-3 '>
                    <div className=' customize_col_one '>
                        <div className='d-flex '>
                        <div className='col_one_image'>
                            <img src="./images/pr_one.jpg" className='image_one' alt=''></img>
                            <img src="./images/pr_back.jpg" className='hover_img' alt=''></img>
                        </div>
                        </div>
                        {/*  */}
                        <div className='col_one_texts'>
                           <div><p className='text-uppercase text-secondary'>fresh vegetable</p></div> 
                           <div className=' bg_green fw-bold text-capitalize'> <p className='fs-5'>organic valley</p></div>
                            <div>
                                <StarRoundedIcon/>
                                <StarRoundedIcon/>
                                <StarRoundedIcon/>
                                <StarRoundedIcon/>
                                <StarRoundedIcon/>

                           
                            </div>
                            <div>   <p>$69.00</p></div>  
                        </div>
                        {/*  */}

                    </div>

                </div>
                {/* col one */}
                
               </div>
               {/* row ends */}

            </div>


        </div>
        {/* customize product ends */}
      
    </div>
  );
}

export default Product;
