import { connect } from 'react-redux';
import React, {useState,useEffect} from 'react';
import axiosWithAuth from '../utilitites/axiosWithAuth';
import { setFriends } from '../actions';
import { logIn } from '../actions';

const AddFriendForm = (props) => {
    useEffect(()=> {
        props.dispatch(logIn())
    }, []);

    const [state, setState] = useState({
        id: Math.random(),
        name:"",
        age:"",
        email:"",
    });   

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    }
    
    const handleSubmit = e => {
        e.preventDefault();
            // props.dispatch(addFriend(state));
        axiosWithAuth()
            .post('/friends', state)
            .then(resp=>{
                props.dispatch(setFriends(resp.data))
                setState({
                        id: Math.random(),
                        name:"",               
                        age:"",
                        email:"",
                    });
                props.history.push('/friends');
            })
            .catch(err=>{
                console.log(err)
            })
    }
    

    return(
    <section className='form-container'>
        <h2>Add Friend</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-grouped">
                <div className="form-group">
                    <label>Name:</label><br/>
                    <input onChange={handleChange} value={state.name} name="name" id="name" />
                </div>
                <div className="form-group">
                    <label>Age:</label><br/>
                    <input onChange={handleChange} value={state.age} name="age" id="age" />
                </div>
                <div className="form-group">
                    <label>Email:</label><br/>
                    <input onChange={handleChange} value={state.email} name="email" id="email" />
                </div>
                <button>Submit Friend</button>
            </div>
        </form>
    </section>
    );
}


const mapStateToProps=state=>{
    return{
      state
    }
}


export default connect(mapStateToProps)(AddFriendForm);