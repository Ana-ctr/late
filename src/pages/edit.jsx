import axios from "axios";
import { useEffect, useState } from "react";

function Edit(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [description, setDescription] = useState('');
    const [user, setUser] = useState(null);  // Set initial state as an array
    const id = localStorage.getItem('token');
    const Form = async () => {
        if (name && email && avatar && description) {
            try {
                const response = await axios.put('https://66fe278b6993693089573e65.mockapi.io/ana/api/users/'+id, {
                    name,
                    avatar,
                    email,
                    description
                });

                console.log('data', response);
                if (response.status === 200) {
                    alert('Success!');
                   
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
            const response = await axios.get('https://66fe278b6993693089573e65.mockapi.io/ana/api/users/'+id);
            console.log('data users', response);
            if (response.status === 200) {
                setUser(response.data);
                setName(response.data.name);
                 setEmail(response.data.email);
                setAvatar(response.data.avatar);
                setDescription(response.data.description);
            } else {
                setUser([]);
            }
        } catch (error) {
            console.error(error);
            alert('Failed to fetch users.');
        }
    };

    useEffect(() => {
        Show();
    }, []);

    return(
        <>
        {user != null ?
        <>
        <div className="container p-5">
            <h3>Edit the data</h3>
            <input type="text" defaultValue={name} onChange={(e)=>setName(e.target.value)} /><br></br><br></br>
            <input type="text" defaultValue={email} onChange={(e)=>setEmail(e.target.value)} /><br></br><br></br>
           
            <input type="text" defaultValue={avatar} onChange={(e)=>setAvatar(e.target.value)} /><br></br><br></br>
            <input type="text" defaultValue={description} onChange={(e)=>setDescription(e.target.value)} /><br></br><br></br>
            
                <button className="btn btn-primary" onClick={Form}>Change</button>
                </div>
            
        </>
        :
        <>
        
        </>

        }
        
        </>
    )


}
export default Edit;