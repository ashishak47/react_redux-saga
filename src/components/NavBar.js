import React from 'react';
import { Link } from "react-router-dom";

const Sep = () => <span> | </span>;

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link> <Sep />
      <Link to="/posts">Posts</Link> <Sep />
      <Link to="/yo">YO!!</Link> <Sep />
      <hr/>
    </div>
  )
}

export default NavBar