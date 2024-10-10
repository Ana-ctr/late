import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./header";

function Profile() {
    const [user, setUser] = useState(null);
    const id = localStorage.getItem('token');
    const fetchUser = async () => {
        const peoples = await axios({
            method: 'get',
            url: "https://66fe278b6993693089573e65.mockapi.io/ana/api/users/" + id

        })
        console.log('peoples', peoples);
        if (peoples.status == 200) {
            setUser(peoples.data);
        }
        else {
            setUser(null);
        }
    }
    useEffect(() => {
        fetchUser();
        if (id == null) {
            window.location.href = '/sign';
        }
    }, []);

    function Logout(){
        localStorage.removeItem('token');
        window.location.href = '/sign'
    }
    function Change(){
        window.location.href = '/edit'
    }





return (
    
    <div className="container">
          <header>
      <Header />
    </header>
        
        <div className="profile-container">

            {user != null ?
                <>
                    <img src={user.avatar} alt="Avatar" className="profile-avatar" />
                    <h2 className="profile-name">{user.name}</h2>
                    <p className="profile-email"><strong>Email:</strong> {user.email}</p>
                    <p className="profile-bio">{user.bio}</p>
                    <button onClick={Change}>Change</button>
                    
                </>
                :
                <>
                    <p>Loading</p>
                </>
            }
        </div>
    </div>
);
}

export default Profile;
