import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';

function Friend (props){
  return(
    <div>{props.friend.name}</div>
  );
}


export default Friend;