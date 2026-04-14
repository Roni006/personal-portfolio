"use client";
import { useState, useEffect } from "react";

const AnimatedCounter = ({ endValue, duration = 2000, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      
      // কতটুকু সময় পার হয়েছে তা ক্যালকুলেট করা
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // বর্তমান সংখ্যা নির্ধারণ করা
      setCount(Math.floor(progress * endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [endValue, duration]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ fontSize: "3rem", fontWeight: "bold", margin: 0 }}>
        {count}+
      </h2>
      <p style={{ fontSize: "1.2rem", color: "#666" }}>
        {label}
      </p>
    </div>
  );
};

export default AnimatedCounter;