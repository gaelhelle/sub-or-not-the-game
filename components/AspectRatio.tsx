import { useEffect, useRef, useState } from "react";

const AspectRatio = ({ children }) => {
  const defaultSize = {
    width: 1550,
    height: 600,
  };

  const [scale, setScale] = useState(1);

  const containerRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      setScale(containerRef.current.offsetWidth / defaultSize.width);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
  }, [containerRef.current]);

  return (
    <div className="relative" ref={containerRef}>
      <div
        className=" origin-top-left"
        style={{
          width: defaultSize.width,
          height: defaultSize.height,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AspectRatio;
