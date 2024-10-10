import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./header";
function Pass() {
    const id = localStorage.getItem('token')
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordnew, setPasswordnew] = useState('');
    const fetchUsers = async () => {

        const personData = await axios({
            method: 'get',
            url: "https://66fe278b6993693089573e65.mockapi.io/ana/api/users/"+id

        })
        console.log('peoples', personData);
        if (personData.status == 200) {

            setUser(personData.data);
        }
        else {
            setUser(null);
        }
    }
    useEffect(() => {

        if (id != null) {
            fetchUsers();
        } else {
            window.location.href = '/';
        }
    }, [])

    const updatePassword = async () => {
        if (user.password == password) {
            const personData = await axios({
                method: "put",
                url: "https://66fe278b6993693089573e65.mockapi.io/ana/api/users/" + id,
                data: {
                    password: passwordnew
                }

            })
            console.log('peoples',personData) 
            if (personData.status == 200){
                alert('Password has changed');
            } else {
                alert('Something went wrong!');
            }
        }
        else {
            alert('Old password is incorrect!');
        }

    }
    return (
        <>
            <header>
                <Header />
            </header>

            <div className="container p-5 ">
                <div className="col-4 p-5 b a">

                    <h3>Change password</h3>
                    Enter old password<br></br>
                    <input type="old password" defaultValue={password} onChange={(e) => setPassword(e.target.value)} /><br></br><br></br>
                    Enter new password<br></br><input type="new password" defaultValue={passwordnew} onChange={(e) => setPasswordnew(e.target.value)} /><br></br><br></br>
                    <button className="btn btn-primary" onClick={updatePassword}>Change</button>
                </div>
            </div>




        </>



    )


}
export default Pass;