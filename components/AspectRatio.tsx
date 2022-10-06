import { useEffect, useRef, useState } from "react";

type Props = {
  width: number;
  height: number;
  children: React.ReactNode;
};

const AspectRatio = (props: Props) => {
  const { children, width, height } = props;

  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleResize() {
      const containerWidth = containerRef.current
        ? containerRef.current.offsetWidth
        : 0;
      setScale(containerWidth / width);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
  }, [containerRef.current]);

  return (
    <div className="relative" ref={containerRef}>
      <div
        className=" origin-top-left"
        style={{
          width: width,
          height: height,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AspectRatio;
