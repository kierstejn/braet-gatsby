import React, { Component } from 'react';
import * as styles from './Tab.module.css';


class Tab extends Component {
  
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = [styles.tabListItem];

    if (activeTab === label) {
      className.push(styles.tabListActive);
    }

    return (
      <li
        className={className.join(" ")}
        onClick={onClick}
      >
        <h3>{label}</h3>
      </li>
    );
  }
}

export default Tab;