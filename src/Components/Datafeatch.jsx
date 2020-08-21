import Axios from 'axios'
import React, {useState, useEffect} from 'react'


function Datafeatch() {
    const [id, setCity]= useState([])

    useEffect(() =>{
        Axios.get('https://developers.zomato.com/api/v2.1/search?entity_id=AIzaSyBAhvLw_czDKnCQc1eEz9HPkOoGU5h6hGU&entity_type=city')
            .then(res => {
                console.log(res)
                setCity(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [])
    return (
        <div>
           <input type="text" value={id} onChange={e => setCity(e.target.value)} />
        </div>
    )
}

export default Datafeatch
