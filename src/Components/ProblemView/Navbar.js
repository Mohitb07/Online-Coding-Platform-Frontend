import React, { useState } from "react";
import logo from "../static/logo.svg";
import "./sass/Navbar.css";

import history from '../../history';
import {Link} from 'react-router-dom';
import Avatar from './Avatar';
import LogoutButton from '../Buttons/Logout'
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Buttons/Login';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import BookmarksIcon from '@material-ui/icons/Bookmarks';

function Navbar(props) {
  const [currentPage, setCurrentPage] = useState("home");

  const setPage = (e) => {
    document.getElementById(currentPage).className = "nav-link";
    document.getElementById(e).className = "nav-link active";
    setCurrentPage(e);
  };

  const { user, isAuthenticated, isLoading } = useAuth0();


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbarBack ">
        <Link className="navbar-brand textFont pr-4" to="/" onClick={()=> setPage('home')} >
          <img
            src={logo}
            alt="logo"
            width="40"
            height="35"
            className="d-inline-block align-top"
          />{" "}
          <strong style={{ color: "white" }}>DirtyBits</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mr-4">
              <Link style={{color:'white'}}
                className="nav-link active"
                to="/"
                id="home"
                onClick={() => setPage("home")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link style={{color:'white'}}
                className="nav-link"
                href="/#"
                id="compete"
                onClick={() => setPage("compete")}
              >
                Compete
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link style={{color:'white'}}
                className="nav-link"
                to="/problemlist"
                id="practice"
                onClick={() => setPage("practice")}
              >
                Practice
              </Link>
            </li>
            <li className="nav-item mr-4">
              <a style={{color:'white'}}
                className="nav-link"
                href="/#"
                id="blogs"
                onClick={() => setPage("blogs")}
              >
                Blogs
              </a>
            </li>
          </ul>
          { isAuthenticated ?

              <ul className="navbar-nav mr-3">
              <li><Avatar img={user.picture}/></li>
            <li className="nav-item dropdown" id="profileDrop">
              <a style={{color:'white',borderBottomStyle:'none',marginTop:'7px'}}
                className="nav-link dropdown-toggle"
                href="/#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {user.name}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link style={{display:'flex'}} className="dropdown-item" to="/profile">
                  <PersonIcon style={{marginRight:'4px',marginLeft:'-13px', fontSize:'20px'}}/>
                  Profile
                </Link>
                <Link style={{display:'flex'}} className="dropdown-item" to="/#">
                  <BookmarksIcon style={{marginRight:'4px',marginLeft:'-13px' , fontSize:'20px'}}/>
                  Bookmarks
                </Link>
                <Link style={{display:'flex'}} className="dropdown-item" to="/dashboard">
                  <DashboardIcon style={{marginRight:'4px',marginLeft:'-13px' , fontSize:'20px'}}/>
                  Dashboard
                </Link>
                <div className="dropdown-divider"></div>
                <Link style={{display:'flex'}} className="dropdown-item" to="/settings">
                  <SettingsIcon style={{marginRight:'4px',marginLeft:'-13px', fontSize:'20px'}}/>
                  Settings
                </Link>
                <Link style={{display:'flex'}} className="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                  <ExitToAppIcon style={{marginRight:'4px',marginLeft:'-13px', fontSize:'20px'}}/>
                  Logout
                </Link>
              </div>
            </li>
          </ul>
            :
            ''
          }


        </div>
      </nav>

    <div class="modal" id="logoutModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h4>Log Out <i class="fa fa-lock"></i></h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          </div>
          <div class="modal-body">
            <p><i class="fa fa-question-circle"></i> Are you sure you want to log-off? <br /></p>
            <div class="actionsBtns">
                <form action="/logout" method="post">
                    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                    <LogoutButton onClick={()=>history.push('/logout')} data-dismiss="modal"/>
                      <button class="btn btn-default ml-3" data-dismiss="modal">Cancel</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Navbar;
