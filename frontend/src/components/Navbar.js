import React from 'react'
import{Link} from 'react-router-dom'
// import { useSelector } from 'react-redux';
// import './Navbar.css'
export default function Navbar() {
  
//   const islogin= useSelector((store)=>store.users.login);
//   const role = useSelector((store)=>store.users.type_of_user)
  // console.log(role)
  const handleLogout=()=>{   
    localStorage.removeItem("token");
    window.location.replace("/login");
  }


    return(
      <>
  
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <a className="navbar-brand translate-middle" href="#" >KnowifyTumkur</a>
 

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link"><Link to="/admin">Home </Link><span className="sr-only"></span></a>
      </li>

      <li className="nav-item active">
        <a className="nav-link"><Link to="/addStadium">Add School</Link><span className="sr-only"></span></a>
      </li>
      
      <li className="nav-item active">
        <a className="nav-link"><Link to="/ListStadium">Add College</Link><span className="sr-only"></span></a>
      </li>

      <li className="nav-item active">
        <a className="nav-link"><Link to="/ListStadium">View Institution</Link><span className="sr-only"></span></a>
      </li>
    </ul>
    {/* {!islogin? */}
    <form className="d-flex">
      <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary mx-1" to="/register" role="button">SignUp</Link></form>:
      <button className="btn btn-primary mx-1" onClick={handleLogout} >Logout</button>
    {/* } */}
    
    
   </div>
</nav>

      
    

    
   
       </> 
    )
 
}
