import { createContext, useState } from "react";

const CursorContext = createContext({
  mouseX: '',
  mouseY: ''
});

export function CursorContextProvider(props) {
  const [mouseX, setMouseX] = useState('');
  const [mouseY, setMouseY] = useState('');
  
  const context = {
    mouseX: mouseX,
    mouseY: mouseY
  }

  function mousePos(event) {
    const { clientX, clientY } = event;
    setMouseX(clientX);
    setMouseY(clientY);
  }


  return (
    <CursorContextProvider value={context}>
      <div onMouseMove={mousePos}>
        {props.children}
      </div>
  
    </CursorContextProvider>
  );
}

export default CursorContext;