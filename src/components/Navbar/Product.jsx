import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Product = ({p}) => {


  const [isHovering, setIsHovering] = useState(false);
  const [imagId, setImgId] = useState();
  const [liked, setLiked]=useState(false)
  const [likedId, setLikedId]=useState()
  const navigate=useNavigate()

  const handleMouseEnter = (id) => {
    setImgId(id);
    setIsHovering(true);
  };

  const handleMouseLeave = (id) => {
    setImgId(id);
    setIsHovering(false);
  };
  return (
    <div
      className="col"
      onMouseEnter={() => handleMouseEnter(p.id)} 
      onMouseLeave={() => handleMouseLeave(p.id)}
      onClick={()=>navigate(`/products/${p.id}`)}
    >
      <div className="w-full aspect-[20/23] bg-[#EEEEEE] flex justify-center items-center ">
        <img
          src={isHovering && imagId == p.id ? p.image : p.alt_image}
          alt=""
          className="w-[90%] h-[90%] "
        />
      </div>
      <div className="mt-2">
        <div className="w-full flex justify-between items-center">
          <p className="customTransition">Name: {p.name}</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={liked && likedId == p.id ? "#DC9814" : "none"}
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h- cursor-pointer"
              onClick={() => {
                setLiked(!liked);
                setLikedId(p.id);
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        </div>
        {isHovering && imagId == p.id ? (
          <button className="underline  hover:text-secondary font-semibold">
            Show more
          </button>
        ) : (
          <p className="font-semibold mt-1">${p.price}</p>
        )}
      </div>
    </div>
  );
};

export default Product;
