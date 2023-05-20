import React from 'react';

export default function AddFriend() {

    //handle submit - add to form
    return(
    <div>
      <h2>ADDFRIEND</h2>
      <form>
        <div>
            <label htmlFor='username'>Username:</label>
            <input id='username'/>
        </div>
        <div>
            <label htmlFor='age'>Age:</label>
            <input id='age'/>
        </div>
        <div>
            <label htmlFor='email'>Email:</label>
            <input id='email'/>
        </div>
        <button>Submit</button>   
      </form>
    </div>
    );
    
  }