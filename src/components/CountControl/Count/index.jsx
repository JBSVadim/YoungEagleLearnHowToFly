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
    
    countResult = () => this.setState((state, props) => {
      const {count, isAdding} = state;
      const value = +this.props.step;
      const newCountState = isAdding ? count + value : count - value
      return {
        count: newCountState
      }
    })
       
   
    toggleMod = () => this.setState((state, props)=>{
     const {isAdding} = state
     return {isAdding: !isAdding}
    })
  
  render () {
    const {count, isAdding} = this.state;
    console.log({isAdding})
    return (
      <article className={styles.container}>
        <h1>Do you have Girlfriend?</h1>
        <h2 className={isAdding ? styles.stateMode2 : styles.stateMode}>{isAdding ? 'No' : 'Yes'}</h2>
        <div>
          <div>
            <span className={styles.countPlaceholder}>{count}$</span>
            <span className={styles.countPlaceholder}>Your money {this.props.step}$</span>
          </div>
          <div className={styles.divFix}>
           <button onClick={this.countResult}>Click</button>
           <button onClick={this.toggleMod}>Change Mode</button>
          </div>
        </div>
      </article>
    ) }

}

export default Counter