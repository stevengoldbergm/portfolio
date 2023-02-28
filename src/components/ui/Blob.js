import classes from "./Blob.module.css";

function Blob({ mouseX, mouseY, scrollY }) {
  const blobStyle = {
    position: "absolute",
    background: "linear-gradient(to right, rgba(255, 0, 0, 0.15) 1%, rgba(0, 0, 255, 0.15) 90%)",
    height: "10rem",
    aspectRatio: 1,
    top: mouseY + scrollY || 0,
    left: mouseX,
    zIndex: 1,
    translate: '-50% -50%',
    borderRadius: '50%',
    pointerEvents: 'none'
  };

  // console.log(mouseX, mouseY, scrollY);


  return <div className={classes.blob} style={blobStyle}></div>;
}

export default Blob;
