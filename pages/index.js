import React, { Component } from 'react';
import { Card, Button, Icon, Divider, Image } from 'semantic-ui-react';
import Layout from '../components/Layout';



class NovaDentalIndex extends Component {

  render () {
    return(
    <Layout>
      <div  style={{ marginLeft: '-50px', marginRight: '-50px' }}>
        <h3>Salud Oral cerca de ti</h3>
        <Divider />
        <Image src='http://files.snackwebsites.net.s3.amazonaws.com/sites/uiab5f3v/files/7?_=1440109909' size='big' fluid/>

      </div>
    </Layout>
    );
  };
}


export default NovaDentalIndex;
