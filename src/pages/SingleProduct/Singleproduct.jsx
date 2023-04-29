import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image1 from "../../assets/image2Copy.png";
import image2 from "../../assets/image10Copy.png";

const allProducts = [
  {
    id: 1,
    name: "product 1",
    image: image1,
    alt_image: image2,
    price: 100,
  },
  {
    id: 2,
    name: "product 1",
    image: image1,
    alt_image: image2,
    price: 100,
  },
  {
    id: 3,
    name: "product 1",
    image: image1,
    alt_image: image2,
    price: 100,
  },
  {
    id: 4,
    name: "product 1",
    image: image1,
    alt_image: image2,
    price: 100,
  },
  {
    id: 5,
    name: "product 1",
    image: image1,
    alt_image: image2,
    price: 100,
  },
  {
    id: 6,
    name: "product 1",
    image: image1,
    alt_image: image2,
    price: 100,
  },
  {
    id: 1,
    name: "product 1",
    image: image1,
    alt_image: image2,
    price: 100,
  },
  {
    id: 7,
    name: "product 1",
    image: image1,
    alt_image: image2,
    price: 100,
  },
];

const Singleproduct = () => {
  const { id } = useParams();

  // const [productId, setProductId]=useState(id)
  const [products, setProducts] = useState([]);
  const [singleP, setSingleP] = useState();
  useEffect(() => {

    setProducts(allProducts);

  }, [allProducts]);
  useEffect(() => {
    const initialProduct = products.find((p) => p.id == id);
    setSingleP(initialProduct);
  }, [products]);

  return (
    <div>
      {/* product details section  */}

      {
        singleP &&
        <section className=" w-[75%] mx-auto flex gap-16  items-start">
        {/* image div  */}
        <div className="w-[60%]">
        <div className="w-full flex items-start bg-slate-300">
          <div className="w-[10%]">
            <img src={singleP.image} alt="" className="w-full h-auto" />
            <img src={singleP.alt_image} alt="" className="w-full h-auto" />
          </div>
          <div className="w-[90%">
            <img src={singleP.image} alt="" className=" w-full h-auto" />
          </div>
        </div>
        </div>

        {/* text div  */}
        <div className="w-[40%]">
           <h4 className="text-3xl">{singleP.name}</h4>
           <p>{singleP.price}</p>
           <p>{singleP.desc? singleP.desc:
           "loremddddddddd ddddddd ddddd dddddddddd dddddddddd dddddddddddd dddddddd dddddddddd ddddddddddddd dddddddddddddd ddddddddddddddddddd"}</p>
           <p>{singleP.rating? singleP.rating :"rating"}</p>
           <div className="flex items-center">
            <p className="flex items-center">
              <button>-</button>
              <input type="number" name="" id="" />
              <button>+</button>
            </p>
            <button>Add to cart</button>
           </div>
        </div>
      </section>
      }
    </div>
  );
};

export default Singleproduct;
