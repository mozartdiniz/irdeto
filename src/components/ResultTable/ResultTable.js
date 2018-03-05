import React from 'react';

const ResultTable = (props) => (
    <table>
        <thead>
            <tr>
                <th>time (5m interval)</th>
                <th>high</th>
                <th>low</th>
                <th>volume</th>
            </tr>
        </thead>
        <tbody>
            {
                props.items.map((item) => <tr key={item.high + item.date + item.volume}>
                    <td></td>
                    <td>{ item.high }</td>
                    <td>{ item.low }</td>
                    <td>{ item.volume }</td>
                </tr>)
            }
        </tbody>
    </table>
);

export default ResultTable;
