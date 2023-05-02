import "./Wrapper.css"

function Wrapper (props) {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        {props.children}
      </div>
    </div>
  )
}

export default Wrapper;