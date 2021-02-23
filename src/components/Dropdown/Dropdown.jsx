import React, { Component } from 'react';

import styles from './Dropdown.module.scss';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;

    return (
      <div className={styles.Dropdown}>
        <button
          className={styles.btnToggle}
          type="button"
          onClick={this.toggle}
        >
          {visible ? 'Скрыть' : 'Показать'}
        </button>

        {visible && <div className={styles.DropdownMenu}>Выпадающее меню</div>}
      </div>
    );
  }
}

export default Dropdown;
