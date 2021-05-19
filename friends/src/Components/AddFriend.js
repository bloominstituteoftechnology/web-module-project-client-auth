import React, { useState } from 'react';
// test //
const AddFriend = () => {
    return (
        <div>
            <h3>Add a New Friend:</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label><br/>
                        <input type='text'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label><br/>
                        <input type='number'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label><br/>
                        <input type='email'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="id">Id Number:</label><br/>
                        <input type='number'/>
                    </div>
                </form>
        </div>
    )
}

export default AddFriend;