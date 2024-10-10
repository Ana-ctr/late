import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Header = () => {
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
    // Assuming you have a token in localStorage to check if the user is logged in
    const token = localStorage.getItem('token');
    if (token) {
     fetchUser();
    }
  }, []);

  const Logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
    setUser(null);
    window.location.href = '/sign'; // Redirect to the sign-in page after logout
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Profile</a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center justify-content-end col-2">
            {user == null ? (
              <>
                <a type="button" className="btn btn-dark btn-sm m-1" href="/sign">
                  <i className="fa-solid fa-user-plus"></i> Login
                </a>
                <a type="button" className="btn btn-primary btn-sm m-1" href="/">
                  <i className="fa-solid fa-right-to-bracket"></i> Register
                </a>
              </>
            ) : (
              <>
                <span className="text-truncate">{user.name}</span>
                <a type="button" onClick={Logout} className="btn btn-dark btn-sm m-1">Logout</a>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
