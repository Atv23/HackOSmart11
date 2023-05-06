
// import './App.css';
import School from "./components/School";
import AllSchool from './components/AllSchool';
import SchoolDetails from './components/SchoolDetails'
// import Register from "./components/register_admin";
import Login from "./components/login_admin";
import admin_option from "./components/admin_option";
import Navbar from "./components/Navbar";
// import './App.css';
// import School from './components/School'
// import App from './components/schoolcard/App';
// import Card from './components/schoolcard/Card';
// import data from './data'
// import { useState,useRef,useEffect } from 'react';

// import New from './components/New';
// import './main.css'
import {
  BrowserRouter as Router,
  Route,
  useParams,
  Routes
} from "react-router-dom";


// import axios from 'axios' 
// function CreateCard() {
//   const [data, setData]=useState([]);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/api/add/listSchool`)
//       .then((response) => {
//         // console.log(response.data[1].stadium_owned[0].stadium_name);
//         setData(response.data);
//         // console.log(data);
//       });
//   }, []);
// const x = data

//   const ref = useRef(null);
//   return (
//     <Card
//       key={x._id}
//       name={x.name}
//       img={x.imgURL}
//       fees = {x.fees}
//       type = {x.type}
//       board = {x.board}
//       grade= {x.grade}
//       add = {x.address}
//     />
//   );
// }

// function App1(){
//   return (
//     <div>
//       <h1 className="heading">School List</h1>
//       {x.map((x1) => (
// {x1.map(CreateCard)}
//   ))}
//     </div>
//   );
// }

function App() {
  return (
    <>
    
      
    {/* <SchoolDetails></SchoolDetails>
    <New></New> */}
    <Router>
    <Navbar></Navbar>
     <Routes>
      {/* <Route Component={SchoolDetails} path={'/schools/:id'}/> */}
      {/* <Route Component={AllSchool} path={'/'}/> */}
      {/* <Route Component={Register} path={'/'}/> */}
      <Route Component={School} path={'/addschool'}/>
      <Route Component={Login} path={'/'}/>
      <Route Component={admin_option} path={'/adminoption'}/>
       {/* <SchoolDetails></SchoolDetails> */}
       {/* <College></College> */}
       {/* <App></App> */}
       
     </Routes>
   </Router>,
   </>

  );
}
export default App;
// export {App1};
// export default {App,App1};
