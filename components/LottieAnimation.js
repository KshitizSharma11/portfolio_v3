// components/LottieAnimation.js
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../assets/animation.json"; // Replace with your animation JSON file

const LottieAnimation = ({ width, height }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg", // You can choose 'svg', 'canvas', 'html' based on your preference
      loop: true,
      autoplay: true,
      animationData: animationData, // the animation JSON file
    });

    return () => {
      anim.destroy(); // Cleanup on unmount
    };
  }, []);

  return <div ref={containerRef} style={{ width, height }} />;
};

export default LottieAnimation;
