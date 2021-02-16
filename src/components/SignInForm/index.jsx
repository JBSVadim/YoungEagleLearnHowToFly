import React, { Component } from "react";
import styles from "./SignInForm.module.css";

const initialValues = {
  email: '',
  password:'',
}
class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...initialValues };
  }

  handleForm = (event) => {
    event.preventDefault();
    this.setState({...initialValues})
  }

  // handleChangeMail = ((event) =>  { this.setState({email: event.target.value});  })
  
  handleChange = ({target: {name, value}}) => this.setState({[name]: value})

  render() {
    const {email, password} = this.state
    return (
      <div>
        <form className={styles.container} action="" onSubmit={this.handleForm}>
          <input
          onChange={this.handleChange}
          value ={email}
            className={styles.btn}
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            onChange={this.handleChange}
           value={password}
            className={styles.btn}
            type="password"
            placeholder="Password"
            name="password"
          />
          <input className={styles.btn} type="submit" />
        </form>
      </div>
    );
  }
}

export default SignInForm;
