import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './style.css';

function TopNav(props){
    const link = props.match.path;
    return (
        <div className="top-nav">
            <Link className={link.includes('favoritecakes') ? null : 'active'} to='/'>Home</Link>
            <Link className={link.includes('favoritecakes') ? 'active' : null} to='/favoritecakes'>Favorite cakes</Link>
        </div>
    )
}

export default withRouter(props => <TopNav {...props} />);
