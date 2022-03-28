import React, { useContext, useEffect } from 'react';
import { Button, Carousel } from 'antd';
import { useParams } from 'react-router-dom';
import { productsContext } from '../../contexts/productContext';
import Loading from '../Loading/Loading';

const Details = () => {
    const {getOneProduct, oneProduct} = useContext(productsContext)
    const params = useParams()
    useEffect(()=> {
        getOneProduct(params.id)
    },[])
    console.log(oneProduct);
    return oneProduct ? (
        <div className='container'>
            <div style={{display: "flex", justifyContent:"space-between", alignItems:"center"}}>
                <div style={{width:"35vw"}}>
                    <Carousel autoplay>
                        <div>
                            <img width="100%" src={oneProduct.image1} alt="" />
                        </div>
                        <div>
                            <img width="100%" src={oneProduct.image2} alt="" />
                        </div>
                    </Carousel >
                </div>

                <div style={{width: "40vw"}}>
                    <h2>{oneProduct.brand}</h2>
                    <h3>{oneProduct.model}</h3>
                    <h2>{"$" + oneProduct.price}</h2>

                    <Button size='large' style={{width:"100%", margin:"15px 0px"}}>
                        Add to cart
                    </Button>

                    <div>\{oneProduct.description}</div>

                </div>
            </div>
            <video src={oneProduct.video} autoPlay loop muted width="100%"></video>
        </div>
    ) : <Loading/>
};

export default Details;