import React from 'react';

const OptionsList = (props) => (
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
);

export default OptionsList;
