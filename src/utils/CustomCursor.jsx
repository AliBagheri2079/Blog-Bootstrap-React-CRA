import React from "react";

/*
 * Taken from Codrops and simplified
 * This idea from `https://codepen.io/andrewmillen/pen/RwVVOze` codepen profile
 */
const CustomCursor = () => {
  // set the starting position of the cursor outside of the screen
  const [client, setClient] = React.useState({ x: -100, y: -100 });
  const cursorEl = React.useRef(null);

  React.useEffect(() => {
    // add listener to track the current mouse position
    window.addEventListener("mousemove", ({ clientX, clientY }) => {
      setClient({ x: clientX, y: clientY });
    });

    // transform the innerCursor to the current mouse position
    // use window.requestAnimationFrame() for smooth performance
    const renderCursor = () => {
      const { x, y } = client;
      cursorEl.current.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(renderCursor);
    };
    requestAnimationFrame(renderCursor);

    return () => {
      // use window.cancelAnimationFrame() for cancle smooth performance when window closed
      cancelAnimationFrame(renderCursor);
    };
  }, [client]);

  return <div className="cursor cursor--small" ref={cursorEl}></div>;
};

export default CustomCursor;
