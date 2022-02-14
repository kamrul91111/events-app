import Link from "next/link";
import React from "react";
import classes from "./header.module.css"

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        {/* take back to the home page */}
        <Link href="/">Home</Link>
      </div>
      <nav className={classes.navigation}>
        <ul style={{listStyle: 'none'}}>
          <li>
            <Link href="/events">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
