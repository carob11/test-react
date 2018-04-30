import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      images: null
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        this.setState({images: response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    if (!this.state.images) {
      return <p>Cargando....</p>
    }

     let photos = this.state.images.map(photo => {
       return (
        <div key={photo.id} >
          <label className="label-photo">{photo.title}</label>
          <img src={photo.url} />
        </div>
       )
     })

    return (
      <div className="App">
        {photos}
      </div>
    );
  }
}

export default App;
