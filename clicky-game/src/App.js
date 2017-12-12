import React, { Component } from 'react';
import Header from "./components/Header/Header";
import ImageCard from "./components/ImageCard/ImageCard";
import Wrapper from "./components/Wrapper/Wrapper";
import images from "./images.json";
import './App.css';

class App extends Component {
  state = {
    images: images
  }

  render() {
    return (<div>
      <Header />
      <Wrapper>
        <div className="card-container">
          {
            this.state.images.map( image => {
              return (
                <ImageCard
                  key={image.id}
                  id={image.id}
                  image={image.image}
                />
              );
            })
          } 
        </div>
      </Wrapper></div>
    )
  }
}

export default App;
