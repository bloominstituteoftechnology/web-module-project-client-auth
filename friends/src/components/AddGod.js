
import React, {useState} from 'react'
import { axiosWithAuth } from '../utils/AxiosWithAuth'


const AddGod = () => {

    const [ newGod, setNewGod ] = useState({
        id:"",
        name:"",
        role:"",
        color:""
    })

    const handleChanges= e => {
        
        setNewGod({...newGod, [e.target.name]: e.target.value})

    }

    const submitHandler = e => {
        e.preventDefault();
        const addNewGod={    
            id: new Date(),
            name: newGod.name,
            role: newGod.role,
            color: newGod.color
        }
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', addNewGod)
        .then((res) => {
            console.log(res)
        })   
    }

    return(
        <div class="flex">
            <h3>Add Gielenor Gods</h3>
            <form onSubmit={submitHandler}>
                <div>
                    <input name="name" value={newGod.name} onChange={handleChanges} placeholder="God Name"/>
                </div>
                <div>
                    <input name="role" value={newGod.role} onChange={handleChanges} placeholder="God Role"/>
                </div>
                <div>
                    <input name="color" value={newGod.color} onChange={handleChanges} placeholder="God Color"/>
                </div>
                <div>
                    <button>Add god</button>
                </div>
            </form>
        </div>
    )

}

export default AddGod;