
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './pages/fon';
import Register from './pages/register';
import SignIn from './pages/sign';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './pages/header';
import Edit from './pages/edit';
import Pass from './pages/password';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}> </Route>
          <Route path="/fon" element={<Profile />}> </Route>
          <Route path="/sign" element={<SignIn />}> </Route>
          <Route path="/header" element={<Header/>}> </Route>
          <Route path="/edit" element={<Edit/>}> </Route>
          <Route path="/password" element={<Pass/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
