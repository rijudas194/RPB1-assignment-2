import React from'react';
import './Nav.css';

import SearchIcon from'@material-ui/icons/Search';
import KebabIcon from'@material-ui/icons/Kebab';
import Notification from'@material-ui/icons/Notification';
import GridIcon from'@material-ui/icons/Grid';
import NavContents from './NavContents';

function Nav() {
  return (
    <div className='nav_container'>
    <div className='nav_left'>
      <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"alt=""/>
<div className='search_box'>
<SearchIcon/>
<input type='text' placeholder='search here'/>
</div>
</div> 
<div className='nav_right' >
<NavContents Icon={NotificationIcon} title="NotificationIcon"/>
<NavContents Icon={KebabIcon} title="KebabIcon"/>
<NavContents Icon={GridIcon} title="GridIcon"/>
  </div>    
    </div>
  );
}

export default Nav;
