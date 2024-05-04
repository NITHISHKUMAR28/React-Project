import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Component/About';
import Services from './Component/Services';
import Signup from './Component/Signup';
// import SigninForm from './Component/SigninForm';
import Student from './Component/Student';
import Teacher from './Component/Teacher';
import TeacherForm from './Component/TeacherForm';
import Login from './Component/Login';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Student' element={<Student></Student>}></Route>
        <Route path='/Teacher' element={<Teacher></Teacher>}></Route>
        <Route path='/TeacherForm' element={<TeacherForm></TeacherForm>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
