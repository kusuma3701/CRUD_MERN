import React ,{useState,useEffect} from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from'axios';
import './View.css';

const View = () => {
    const [user,setUser] =useState({});
    const {id}=useParams();
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/get/${id}`).then((res)=>setUser({...res.data[0]}));

    },[id]);
  return (
    <div style={{marginTop:"150px"}} >
        <div className='card'>
            <div className='card-header'>
                <p>User Contact Detail</p>

            </div>
            <div className='container'>
                <strong>ID:</strong>
                <span>{id}</span>
                <br />
                <br />
                <strong>NAME:</strong>
                <span>{user.name}</span>
                <br />
                <br />
                <strong>EMAIL:</strong>
                <span>{user.email}</span>
                <br />
                <br />
                <strong>CONTACT:</strong>
                <span>{user.contact}</span>
                <br />
                <br />
                <Link to="/">
                <div className='btn btn-edit'>Go Back</div>
                </Link>

            </div>
        </div>
        
    </div>
  )
}

export default View;