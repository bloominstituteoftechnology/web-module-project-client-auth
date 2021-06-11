import { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import initialFormValues from "../states/initialFormValues";
import Adidas from "../assets/adidas.png";

export default function AddProducts() {
  //sanity checker
  // console.log('initial form values', InitialFormValues
  const [newProduct, setNewProduct] = useState(initialFormValues);
  const history = useHistory();

  const handleChange = (e) => {
    console.log({ [e.target.name]: e.target.value });
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/products", newProduct)
      .then((res) => {
        setNewProduct(initialFormValues);
        history.push("/protected");
      })
      .catch((err) => {
        console.log("Error posting new product", err);
      });
  };
  return (
    <>
      <div
        className="d-flex justify-content-center parallax-wrapper5"
        style={{ minHeight: "100vh", marginTop: "95vh" }}
      />
      <div className="d-flex justify-content-center regular-wrapper5">
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column justify-content-center, align-items-center"
          style={{
            maxWidth: "65vw",
            margin: "30vh 0",
            alignSelf: "center",
            backgroundColor: "#444",
            padding: "8vh 10vw",
            opacity: "0.8",
          }}
        >
          <img
            src={Adidas}
            alt="adidas-logo"
            style={{ height: "20vh", margin: "auto 1vw" }}
          />
          <h4>Product Management</h4>
          <TextField
            type="text"
            name="name"
            label="input name"
            variant="outlined"
            margin="dense"
            value={newProduct.name}
            onChange={handleChange}
            style={{ backgroundColor: "#AAA" }}
          />
          <TextField
            type="text"
            name="price"
            label="input price"
            variant="outlined"
            margin="dense"
            value={newProduct.price}
            onChange={handleChange}
            style={{ backgroundColor: "#AAA" }}
          />
          <TextField
            type="text"
            name="img_url"
            label="input image link"
            variant="outlined"
            margin="dense"
            value={newProduct.img_url}
            onChange={handleChange}
            style={{ backgroundColor: "#AAA" }}
          />
          <TextField
            type="text"
            name="description"
            label="input description"
            variant="outlined"
            margin="dense"
            value={newProduct.description}
            onChange={handleChange}
            style={{ backgroundColor: "#AAA", fontSize: "12px" }}
          />
          <label className="labels" htmlFor="stock_cat">
            Stock Category
          </label>
          <select
            id="stock_cat"
            name="stock_cat"
            onChange={handleChange}
            style={{ fontSize: "1.2rem", maxWidth: '60vw' }}
          >
            <option>--</option>
            <option value="apparel" className="options">
              Apparel
            </option>
            <option value="footwear" className="options">
              Footwear
            </option>
            <option value="accessories" className="options">
              Accessories
            </option>
            <option value="sets" className="options">
              Sets
            </option>
            <option value='hats' className='options'>
              Hats
            </option>       
            <option value='outerwear' className='options'>
              Outerwear
            </option>          
          </select>
          <label className="labels" htmlFor="season">
           Season
          </label>
          <select
            id="season"
            name="season"
            onChange={handleChange}
            style={{ fontSize: "1.2rem", maxWidth: '60vw' }}
          >
            <option>--</option>
            <option value="spring" className="options">
              Spring
            </option>
            <option value="summer" className="options">
              Summer
            </option>
            <option value="fall" className="options">
              Fall
            </option>
            <option value="winter" className="options">
              Winter
            </option>
            <option value='year round' className='options'>
              All Season
            </option>            
          </select>
          <label className="labels" htmlFor="region">
           Region
          </label>
          <select
            id="region"
            name="region"
            onChange={handleChange}
            style={{ fontSize: "1.2rem", maxWidth: '60vw' }}
          >
            <option>--</option>
            <option value="North America" className="options">
              North America
            </option>
            <option value="South America" className="options">
              South America
            </option>
            <option value="EU/ AU" className="options">
              EU/ AU
            </option>
            <option value="Asia/ Pacific" className="options">
              Winter
            </option>
            <option value='Micro Regional' className='options'>
              Micro Regional
            </option>            
          </select>
          <Button
           variant='container'
           size='medium'
           color='inherit'
           style={{margin: '2vh 0'}}
           onClick={handleSubmit}
          >
              Add Product
          </Button>
        </form>
      </div>
    </>
  );
}
