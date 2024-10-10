import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./header";

function SignIn() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const id = localStorage.getItem('token');
    const fetchUsers = async () => {

        const peoples = await axios({
            method: 'get',
            url: "https://66fe278b6993693089573e65.mockapi.io/ana/api/users"

        })
        console.log('peoples', peoples);
        if (peoples.status == 200) {

            setUsers(peoples.data);
        }
        else {
            setUsers([]);
        }
    }
    useEffect(() => {
        fetchUsers();
        if(id != null){
            window.location.href = '/fon';
        }
    }, []);
    const Login = () => {
        if (login != "" && password != "") {
            const user = users.filter((i) => i.email == login && i.password == password);
            if (user.length > 0) {
                localStorage.setItem('token', user[0].id);
                window.location.href = '/fon';
            } else {
                alert('Login or password incorrect')
            }


        } else {
            alert('Fields empty')
        }


    }
    return (

        <>
          <header>
      <Header />
    </header>
    <div className="col-4 a mt-5 b">
        <h4>Login</h4>
        Username<br></br>
            <input type="text" onChange={(e) => setLogin(e.target.value)} /><br/><br/>
            Password<br></br>
            <input type="text" onChange={(e) => setPassword(e.target.value)} /> <br/><br/>
            <button onClick={Login}>Login</button><br></br><br></br>
            
           
                <a className="nav-link" href="">Forgot password?</a>
             
            </div>
        </>
    )
}
export default SignIn;