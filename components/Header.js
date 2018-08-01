import React from 'react';
import { Menu } from 'semantic-ui-react';


export default () => {

  return(
    <Menu style={{ marginLeft: '-50px', marginRight: '-50px' }}>
      <Menu.Menu position="left">
          <img src='http://files.snackwebsites.net.s3.amazonaws.com/sites/uiab5f3v/files/2' className="item"/>
          <h1>NovaDental</h1>

      </Menu.Menu>

      <Menu.Menu position="right">
          <a className="item">
            Servicios
            <i className='plus icon'></i>
          </a>
          <a className="item">
            Contacto
            <i className='envelope icon'></i>
          </a>
      </Menu.Menu>
    </Menu>
  );
};
