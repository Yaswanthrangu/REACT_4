import Axios from "axios";
import {useEffect, useState} from "react";
import './dummydata.css';

function Table(){
    const [dt, setData] = useState([]);

    useEffect(() => {
        Axios.get("https://dummyjson.com/users")
        .then((res) => {
            if(res.status === 200){
                console.log(res.data.users);
                setData(res.data.users);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err) => alert(err));
    },[])

    const ListNames = () => {
        return dt.map((val) => {
            return(
                <tbody>
                    <td>{val.id}</td>
                    <td><img src={val.image} alt="profile"/></td>
                    <td>{val.firstName}</td>
                    <td>{val.lastName}</td>
                    <td>{val.gender}</td>
                    <td>{val.email}</td>
                    <td>{val.username}</td>
                    <td>{val.domain}</td>
                    <td>{val.ip}</td>
                    <td>{val.university}</td>
                </tbody>
            )
        })
    }
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Dummy data</h1>
            <table>
                <thead>
                    <th>Sno</th>
                    <th>Profile Pic</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>E-mail</th>
                    <th>Username</th>
                    <th>Domain</th>
                    <th>IP</th>
                    <th>University</th>
                </thead>
                {ListNames()}
            </table>
        </div>
    )
}

export default Table;