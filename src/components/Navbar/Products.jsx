import React, { useState } from 'react';
import image1 from "../../assets/image2Copy.png"
import image2 from "../../assets/image10Copy.png"

const Products = () => {
    const products=[
        {
            "id":1,
            "name":"product 1",
            "image":image1,
            "alt_image":image2,
            "price":100, 

        },
        {
            "id":2,
            "name":"product 1",
            "image":image1,
            "alt_image":image2,
            "price":100,

        },
        {
            "id":3,
            "name":"product 1",
            "image":image1,
            "alt_image":image2,
            "price":100,

        },
        {
            "id":4,
            "name":"product 1",
            "image":image1,
            "alt_image":image2,
            "price":100,

        },
        {
            "id":5,
            "name":"product 1",
            "image":image1,
            "alt_image":image2,
            "price":100,

        },
        {
            "id":6,
            "name":"product 1",
            "image":image1,
            "alt_image":image2,
            "price":100,

        },
        {
            "id":1,
            "name":"product 1",
            "image":image1,
            "alt_image":image2,
            "price":100,

        },
        {
            "id":7,
            "name":"product 1",
            "image":image1,
            "alt_image":image2,
            "price":100,

        },
    ]

    const [isHovering, setIsHovering] = useState(false);
    const [imagId, setImgId]=useState()

    const handleMouseEnter = (id) => {
        setImgId(id)
        setIsHovering(true);
      }

      const handleMouseLeave = (id) => {
        setImgId(id)
        setIsHovering(false);
      }
    return (
        <div className='container mx-auto mt-16'>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                products?.map(p=>{
                    return(
                        <div className='col'>
                            <div className='w-full aspect-[10/12] bg-[#EEEEEE] flex justify-center items-center '
                            onMouseEnter={()=>handleMouseEnter(p.id)}
                            onMouseLeave={()=>handleMouseLeave(p.id)}>
                                <img src={(isHovering && imagId==p.id) ? p.image : p.alt_image} alt="" className='w-[90%] h-[90%] ' />
                            </div>
                            <div>
                                <p className='customTransition'>Name: {p.name}</p>
                            </div>

                        </div>
                    )
                })
            }

            </div>


        </div>
    );
};

export default Products;
