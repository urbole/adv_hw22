// import logo from "../assets/img/logo.png";
// import React from "react";
// import { Link } from "react-router-dom";
// import '../style/navbar.css';

// const links = [
//   {
//     to: '/adv_hw22',
//     label: 'Log In'
//   },
//   {
//     to: '/adv_hw22/registerpage',
//     label: 'Register'
//   },
// ];

// export const NavBar = () => (
//   <nav className="nav_bar_wrapper df fd_r">
//     <div className="nav_bar_logo_wrapper">
//       <img className="nav_bar_logo_img" src={logo} aria-hidden="true" alt="" />
//     </div>
//     <h2 className="hw_title">HW22 "Styled Components"</h2> 
//     <ul className="nav_bar_links_list df f_w">
//       {
//         links.map(link =>
//           <li className='nav_bar_link_item' key={link.to}>
//             <Link to={link.to}>{link.label}</Link>
//           </li>
//         )
//       }
//     </ul>
//   </nav>
// )