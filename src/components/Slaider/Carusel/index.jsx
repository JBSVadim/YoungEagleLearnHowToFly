import React, {Component} from 'react';
import imagesDB from '../DataBase'
class Carusel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRunning: false,
      currentSlide: 0,
    }
  }

  nextSlide = () => 
  this.setState((state, props) => {
    const {currentSlide} = state;
    const newValue = currentSlide + 1;
    return {
      currentSlide: newValue
    }
  })
  
  slideSelector = ((state, props) => {
    const {currentSlide} = state;
   
    
  });

  render() {
    return (
      <section>
        <div>
          <button>&#60;</button>
          <img src="" alt=""/>
          <button>&#62;</button>
        </div>
        <div>
          <button></button>
        </div>
      </section>
    )
  }


  
}

export default Carusel