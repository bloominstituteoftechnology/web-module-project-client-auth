import {Link} from 'react-router-dom'

export default function Footer() {

    return (
<footer
className='d-flex flex-row flex-wrap justify-content-between'
color={"inherit"}
style={{
  backgroundColor: "#222",
  color: "white",
  boxShadow: "0 0 2rem #FF00C8",
  textAlign: "center",
}}
>
 <p style={{margin: 'auto 2vw', fontSize: '10px'}}>2021 adidas America Inc.</p>
<div
    className="d-flex flex-row"
    style={{ alignSelf: "end", margin: "0.5vh 2vw"}}
  >
    {" "}
    <Link
      to="/"
      className="btn"
      style={{ color: "#666" }}
    >
      Data settings
    </Link>
    <Link
      to="/"
      className="btn"
      style={{ color: "#666", margin: "0 1rem" }}
    >
      Do not sell my personal info
    </Link>
    <Link
      to="/"
      className="btn"
      style={{ color: "#666", margin: "0 1rem" }}
    >
      Privacy Policy
    </Link>
    <Link
      to='/'
      className='btn'
      style={{ color: '#666', margin: '0 1rem'}}
      >
      Terms and Conditions
      </Link>
    <Link
      to="protected"
      className="btn"
      style={{ color: "#666" }}
    >
      Products
    </Link>
  </div>
</footer>

    )
}
