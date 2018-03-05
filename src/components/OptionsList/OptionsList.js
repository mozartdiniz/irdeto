import React from 'react';

import styles from './styles.css';

const OptionsList = (props) => (
    <div className={styles.OptionList}>
        <select value={props.selecteItem} onChange={props.onChange}>
            {
                props.items.map((item) =>
                    <option
                        key={item.value}
                        value={item.value}
                    >{item.text}</option>
                )
            }
        </select>
    </div>
);

export default OptionsList;
