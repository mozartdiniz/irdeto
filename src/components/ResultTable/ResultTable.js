import React from 'react';

import styles from './style.css';

import { convertToDateTime } from '../../utils/timeIntervalUnix';

const ResultTable = (props) => (
    <table className={styles.ResultTable} cellSpacing="0">
        <thead>
            <tr>
                <th className={styles.TimeColumn}>Time (5m interval)</th>
                <th>High</th>
                <th>Low</th>
                <th>Volume</th>
            </tr>
        </thead>
        <tbody>
            {
                props.items.map((item) => <tr key={item.high + item.date + item.volume}>
                    <td>{ convertToDateTime(item.date) }</td>
                    <td>{ item.high }</td>
                    <td>{ item.low }</td>
                    <td>{ item.volume }</td>
                </tr>)
            }
        </tbody>
    </table>
);

export default ResultTable;
