import React from 'react';
import "./sidebar.css"
import {LineStyle , Timeline , TrendingUp} from '@material-ui/icons';
import { Link } from "react-router-dom";
export default function Sidebar() {
  return <div className='sidebar'>
      <div className="sidebarWrapper">
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                  <Link to="/" style={{textDecoration:"none"}}>
                  <li className="sidebarlistItem active">
                        <LineStyle className='sideBarIcon'/>
                        Home
                  </li>
                  </Link>
                  <li className="sidebarlistItem">
                        <Timeline className='sideBarIcon'/>
                        Analytics
                  </li>
                  <li className="sidebarlistItem">
                        <TrendingUp className='sideBarIcon'/>
                        Sales
                  </li>
              </ul>

          </div>
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className="sidebarList">
                  <Link to="/users" style={{textDecoration:"none"}}>
                  
                  <li className="sidebarlistItem active">
                        <LineStyle className='sideBarIcon'/>
                        Users
                  </li>
                  </Link>
                  <Link to="/products" style={{textDecoration:"none"}}>
                  <li className="sidebarlistItem">
                        <Timeline className='sideBarIcon'/>
                        Products
                  </li>
                  </Link>
                  <li className="sidebarlistItem">
                        <TrendingUp className='sideBarIcon'/>
                        Transactions
                  </li>
                  <li className="sidebarlistItem">
                        <TrendingUp className='sideBarIcon'/>
                       Reports
                  </li>
              </ul>

          </div>
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Notifications</h3>
              <ul className="sidebarList">
                  <li className="sidebarlistItem active">
                        <LineStyle className='sideBarIcon'/>
                        Mail
                  </li>
                  <li className="sidebarlistItem">
                        <Timeline className='sideBarIcon'/>
                        Feedback
                  </li>
                  <li className="sidebarlistItem">
                        <TrendingUp className='sideBarIcon'/>
                        Messages
                  </li>
              </ul>

          </div>
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Staff</h3>
              <ul className="sidebarList">
                  <li className="sidebarlistItem active">
                        <LineStyle className='sideBarIcon'/>
                        Manage
                  </li>
                  <li className="sidebarlistItem">
                        <Timeline className='sideBarIcon'/>
                        Analytics
                  </li>
                  <li className="sidebarlistItem">
                        <TrendingUp className='sideBarIcon'/>
                        Reports
                  </li>
              </ul>

          </div>
      </div>

  </div>;
}
