import React, {Component} from 'react';
import Counter from './Count'


class StepControler extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
    }
  }

  handleForm = (event) => {
    event.preventDefault();
      }

  handleChange = ({target: {name, value}}) =>  this.setState({[name]: value})

  // changeStep = () => 
  // this.setState((state, props) => {
  //   const {step} = state;
  //   const newStep = step + 1;
  //   return {
  //     step: newStep
  //   }
    // })

  render() {
    const {step} = this.state;
    return (
      <div>
        <Counter step={step}/>
        <form action="" onSubmit={this.handleForm}>
        <input onChange={this.handleChange} pattern="[0-9]{1,5}" type="number" name="step" placeholder="Choose u Number"/>
        </form>
      </div>
    )
  }
  
}

export default StepControler