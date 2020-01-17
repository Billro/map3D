
import { Component } from 'react';
import styles from './index.css';



class BasicLayout extends Component {

  render() {

    return (
      <div className={styles.normal}>
        {this.props.children}
      </div>
    )
  }
}

export default BasicLayout;
