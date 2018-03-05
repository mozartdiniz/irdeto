import React from 'react';

import styles from './style.css';

const RangeFilter = (props) => (
    <div className={styles.RangeFilter}>
        <div className={styles.Title}>Value range for the period</div>
        <div className={styles.Labels}>Min:</div> {props.cotationThresholds.min}
        <input
            type="range"
            min={props.cotationThresholds.min}
            max={props.cotationThresholds.max}
            step="any"
            onChange={props.selectMaxCotation}
        />
        <div className={styles.Labels}>Max:</div> {props.cotationThresholds.max}
    </div>
);

export default RangeFilter;
