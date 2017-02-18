//React library
import React from 'react';

//Axios for Ajax
import Axios from 'axios';

//Custom components
import Header from '../components/header.component';
import Content from '../components/content.component';
import Footer from '../components/footer.component';

class AppContainer extends React.Component {

  constructor(props) {
     super(props);
     this.state = {

     };
   }

  render () {
    return (
      <div>
        <p>React Boilerplate</p>
      </div>
    );
  }
}

export default AppContainer
