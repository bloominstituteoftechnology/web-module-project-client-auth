import {Link} from 'react-router-dom'
import AppBar from "@material-ui/core/AppBar";
import Adidas from '../assets/adidas.png'

export default function Nav() {

    return (
        <AppBar
        className='d-flex flex-row flex-wrap justify-content-between'
        color={"inherit"}
        style={{
          backgroundColor: "#222",
          color: "white",
          boxShadow: "0 0 2rem #FF00C8",
          textAlign: "center",
        }}
      >
        <img src={Adidas} alt='adidas-logo' style={{height: '10vh', margin: 'auto 1vw'}}/>
        <h4 style={{margin: 'auto 1vw'}}>ADIDAS PRODUCT PORTAL</h4>
        <div
            className="d-flex flex-row"
            style={{ alignSelf: "end", margin: "auto 2vw" }}
          >
            {" "}
            <Link
              to="/home"
              className="btn"
              style={{ color: "#666" }}
            >
              Home
            </Link>
            <Link
              to="login"
              className="btn"
              style={{ color: "#666", margin: "0 1rem" }}
            >
              Login
            </Link>
            <Link
              to="logout"
              className="btn"
              style={{ color: "#666", margin: "0 1rem" }}
            >
              Logout
            </Link>
            <Link
              to='addproducts'
              className='btn'
              style={{ color: '#666', margin: '0 1rem'}}
              >
              Product Maintenance
              </Link>
            <Link
              to="protected"
              className="btn"
              style={{ color: "#666" }}
            >
              Products
            </Link>
          </div>
      </AppBar>
    )
}