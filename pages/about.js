import React, { Component } from 'react';
import { Card, Button, Icon, Grid, Image } from 'semantic-ui-react';
import Layout from '../components/Layout';



class AboutPage extends Component {

  render () {
    return(
    <Layout>
      <h3>Servicios NovaDental</h3>
    <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='http://files.snackwebsites.net.s3.amazonaws.com/sites/uiab5f3v/files/6' />
      </Grid.Column>
      <Grid.Column>
        <Image src='http://files.snackwebsites.net.s3.amazonaws.com/sites/uiab5f3v/files/6' />
      </Grid.Column>
      <Grid.Column>
        <Image src='http://files.snackwebsites.net.s3.amazonaws.com/sites/uiab5f3v/files/6' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='http://files.snackwebsites.net.s3.amazonaws.com/sites/uiab5f3v/files/6' />
      </Grid.Column>
      <Grid.Column>
        <Image src='http://files.snackwebsites.net.s3.amazonaws.com/sites/uiab5f3v/files/6' />
      </Grid.Column>
      <Grid.Column>
        <Image src='http://files.snackwebsites.net.s3.amazonaws.com/sites/uiab5f3v/files/6' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
    </Layout>
    );
  };
}


export default AboutPage;
