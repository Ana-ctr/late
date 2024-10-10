import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./header";

function Register() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [description, setDescription] = useState('');
    const [users, setUsers] = useState([]);  // Set initial state as an array

    const Form = async () => {
        if (name && password && email && avatar && description) {
            try {
                const response = await axios.post('https://66fe278b6993693089573e65.mockapi.io/ana/api/users', {
                    name,
                    password,
                    avatar,
                    email,
                    description
                });

                console.log('data', response);
                if (response.status === 201) {
                    alert('Success!');
                    Show();  // Refresh user list after registration
                }
            } catch (error) {
                console.error(error);
                alert('Error registering user.');
            }
        } else {
            alert('Please fill all the fields!');
        }
    };

    const Show = async () => {
        try {
            const response = await axios.get('https://66fe278b6993693089573e65.mockapi.io/ana/api/users');
            console.log('data users', response);
            if (response.status === 200) {
                setUsers(response.data);
            } else {
                setUsers([]);
            }
        } catch (error) {
            console.error(error);
            alert('Failed to fetch users.');
        }
    };

    useEffect(() => {
        Show();
    }, []);

    return (
        <div className="container-fluid">
             <header>
      <Header />
    </header>
            <div className="col-4 mt-5 a b ">
                <h2>Register New User</h2>
                <div className="mb-3">
                    <label>Name</label>
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                    <label>Avatar URL</label>
                    <input type="url" className="form-control" onChange={(e) => setAvatar(e.target.value)} placeholder="Enter avatar URL" />
                </div>
                <div className="mb-3">
                    <label>Description</label>
                    <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} placeholder="Enter description"></textarea>
                </div>
                <button className="btn btn-primary" onClick={Form}>Register</button>
            </div>

        </div>
    );
}

export default Register;
