import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import AddGod from '../components/AddGod'

const GodList = e => {

    const [godData, setGodData] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/api/friends')
        .then((res) => {
            setGodData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [godData])

    return (
        <div class='flex-container'>
            <AddGod/>
            <div class="god-box">
            {godData.map(god => {
                return (
                <div class="god" key={god.id}>
                    <h2>{god.name}</h2>
                    <p>{god.role}</p>
                    <p>{god.color}</p>
                </div>)
            })}
            </div>
        </div>
    )

}

export default GodList;