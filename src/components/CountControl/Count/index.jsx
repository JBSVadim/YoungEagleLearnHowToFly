import React, {Component} from 'react';
import styles from './Count.module.css'


class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      isAdding: true,
    }
  }
    countIncriment = () =>
    this.setState((state, props) => {
      const {count} = state;
      const value = +this.props.step 
      const newCountState = count + value;
      return {
        count: newCountState
      };
    })

    countDecriment = () =>
    this.setState(( state, props) => {
      const {count} = state;
      const value = +this.props.step 
      const newCountState = count - value;

      return {
        count: newCountState
      }
    });
   
    toggleMod = () => {
     
    }
  
  render () {
    const {count} = this.state;
    return (
      <article className={styles.container}>
        <h1>Lets Start to Count with JSX</h1>
        <div>
          <div>
            <span className={styles.countPlaceholder}>{count}$</span>
            <span className={styles.countPlaceholder}>This is your money, beach {this.props.step}$</span>
          </div>
          <div className={styles.divFix}>
           <button onClick={this.countIncriment}>Add</button>
           <button onClick={this.countDecriment}>Addios</button>
           <button onClick={this.toggleMod}>ChangeMode</button>
          </div>
        </div>
      </article>
    ) }

}

export default Counter