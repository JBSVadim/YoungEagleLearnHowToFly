import { Component } from 'react';
import styles from './Aloha.module.css'

class Aloha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGreeting: true,
    };
  }

  switchState = () => {
    const { isGreeting } = this.state;
    this.setState({
      isGreeting: !isGreeting,
    });
  };

  deleteHandler = () => {
    const { deleteUser, id } = this.props;
    deleteUser(id);
  };

  render() {
    const { isGreeting } = this.state;
    const { name } = this.props;
    if (!isGreeting) {
      return <h1>ПОКА {name}</h1>;
    }

    return (
      <div className= {styles.container}>
        <h1>
          {isGreeting ? 'Hello' : 'Goodbye'}, {name}
        </h1>
        <button className= {styles.btn} onClick={this.switchState}>Switch</button>
        <button className= {styles.btn} onClick={this.deleteHandler}>X</button>
      </div>
    );
  }
}

export default Aloha;
