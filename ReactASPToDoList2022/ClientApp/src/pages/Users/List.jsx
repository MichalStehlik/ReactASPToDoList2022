import axios from "axios";
import { useState, useEffect } from "react"
import {useAuthContext} from "../../providers/AuthProvider"

export const List = props => {
    const [{profile, accessToken}] = useAuthContext();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(()=>{
        setLoading(true);
        axios.get("/api/users", {
            headers: {
                Authorization: "Bearer " + accessToken,
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            setError(true);
        })
        .then(()=>{
            setLoading(false);
        })
    },[]);
    return (
        <ul>
        {data.map((item, index) => (<li key={index}>{item.username}</li>))}
        </ul>
    );
}

export default List;