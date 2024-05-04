import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';

function Teacher() {
    // Get the name from URL parameters
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const userName = params.get('name');
    const [list, setList] = useState([]);

    useEffect(() => {
        // Fetch data
        axios.get('http://localhost:3002/teacher')
            .then(res => { setList(res.data); })
            .catch(err => { console.log(err); });
    }, []);

    return (
        <div>
            <h2>Welcome, {userName}!</h2>
            <button className='teacher_btn'>
                <NavLink to='/TeacherForm' className='h1'><h1>+</h1></NavLink>
            </button>

            <div className="row">
                {list.map(x => (
                    userName === x.UserName && (
                        <div key={x.id} className="col-md-4 mb-4">
                            <div className="card">
                                <img src="/w3images/team2.jpg" alt={x.UserName} style={{ width: "100%" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{x.UserName}</h5>
                                    <p className="card-text">{x.VideoName}</p>
                                    <p className="card-text">{x.VideoDescription}</p>
                                    <button className="btn btn-primary" onClick={() => { window.location.href = x.link }}>View</button>
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

export default Teacher;
