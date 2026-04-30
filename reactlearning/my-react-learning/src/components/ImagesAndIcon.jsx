import React, { useRef, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import hero from '/src/assets/hero.png'

export default function ImagesAndIcon() {
  const [showIcon, setShowIcon] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const icon = useRef();
  const isRed = useRef(true);


  const displayImage=()=>{
        setShowImage(true)
  }
  const changeColour = () => {
    if (isRed.current) {
      icon.current.style.color = "red";
      isRed.current = false;
    } else {
      icon.current.style.color = "blue";
      isRed.current = true;
    }
  };

  const displayIcon = () => {
    setShowIcon(true);
  };


  const removeIcon=()=>{
    setShowIcon(false)
  }

  return (

    <>
        <div>
          <button onClick={displayIcon}>Show Icon</button>
          <button onClick={removeIcon}>Remove Icon</button>

          <button onClick={changeColour}>Toggle Color</button>

          {showIcon && <FaTwitter size={32} ref={icon} />}

        </div>

        <div>
            <button onKeyDown={displayImage}>Click me to see image</button>
           { showImage && <img src={hero}  style={{width:"100px",height:"100px"}}alt="" />}
       
        </div>
    </>






  );
}