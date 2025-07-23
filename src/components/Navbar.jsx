import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import clock from '../assets/clock.svg'
import line from '../assets/line.svg'
import taskmanagement from "../assets/taskmanagement.svg";
const Navbar = () => { 
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center">
        <img className="h-15 w-13"src={taskmanagement}></img>
      <Link to="/" className="text-4xl font-bold text-teal-400 ms-5">Task Manager</Link>
      </div>
      <ul className="flex  gap-6 items-center ">
        {/* MUI Dropdown */}
        <li>
          <Button
            id="madefor-button"
            aria-controls={open ? "madefor-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ color: "#333", textTransform: "none" }}
          >
            Madefor
          </Button>
          <Menu
            id="madefor-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "madefor-button",
            }}
          >
            <MenuItem onClick={handleClose} component={Link} to="/TaskManagement">
            <img src={taskmanagement} alt="Task" className="h-5 w-5 mr-2" />
            <span className="text-teal-600">Task Management</span>
            </MenuItem>
          
            <MenuItem onClick={handleClose} component={Link} to="/HabitForming">
             <img src={line} alt="Task" className="h-5 w-5 mr-2" />
            <span className="text-teal-600">Habit Forming</span>
            </MenuItem>
          </Menu>
        </li>

        <li>
          <Link to="/pricing" className="hover:text-teal-600">Pricing</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-teal-600">Log in</Link>
        </li>
      </ul>
    </nav>
  );


}
export default Navbar;
