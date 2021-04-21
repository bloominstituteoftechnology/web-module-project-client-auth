import React, {useState} from "react";
import axios from "axios";
import friends from '../../../server';

const Friend = (props) => {
      return (
          <div>
              <h1>Name: {this.props.name}</h1>
              <p>Age: {this.props.age}</p>
              <p>Email: {this.props.email}</p>
          </div>
      )
}
export default Friend;