import React, {Component} from 'react';
import styles from './Count.module.css'
import cx from 'classname'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      isAdding: true,
      isRunning: false,
      interval: 1,
    }
    this.timeoutId = null;
  }
    
    countResult = () => this.setState((state, props) => {
      const {count, isAdding} = state;
      const value = +this.props.step;
      const newCountState = isAdding ? count + value : count - value
      return {
        count: newCountState
      }
    })
    
    resetMode = () =>
    this.setState((state,props)=> {
      return {
        isRunning: false,
        count: 0
      }
    })

    toggleMode = () => 
    this.setState((state, props)=>{
    const {isRunning} = state;
    return { isRunning: !isRunning } 
  });  
   
    toggleMod = () => this.setState((state, props)=>{
     const {isAdding} = state
     return {isAdding: !isAdding}
    })

    handleChange = ({target: {name, value}}) => {
    if (value >= 1 ) {
     return this.setState({[name]: value}) }
    if(value < 1){
      return this.setState({[name]: 1})
    }}
   
    clear = () => {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    };
    
    componentDidUpdate() {
      const  {isRunning, interval}  = this.state;
      this.clear();
      if (isRunning)   {
        this.timeoutId = setTimeout(this.countResult, interval*1000);}}
    
        componentWillUnmount() {
          this.clear();
        }    
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
           <button className={styles.btn} onClick={this.countResult}>Click</button>
           <button className={styles.btn} onClick={this.toggleMod}>Change Mode</button>
           <button onClick={this.toggleMode}>Auto click</button>
           <button onClick={this.resetMode}>Reset</button>
          <input onChange={this.handleChange} pattern="[0-9]{1,5}" type="number" name="interval" placeholder="Update time"/>
        
          </div>
        </div>
      </article>
    ) }

}

export default Counter