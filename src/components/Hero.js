"use client";

import React from "react";
import Typed from "typed.js";
const Hero = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>FrontEnd</i> Developer", "Tech Enthuastic"],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <p className="">Hello I'm</p>
      <h1 className="text-3xl font-bold">Mayuresh Kumbhar</h1>
      <span ref={el} />

    </div>
  );
};

export default Hero;
