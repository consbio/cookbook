import React from 'react'

export default ({ crossfilter }) => (
    <table className="table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Tip</th>
                <th>Type</th>
                <th>Product IDs</th>
            </tr>
        </thead>
        <tbody>
            {crossfilter.allFiltered().map((d, idx) => (
                <tr key={idx}>
                    <td>{(new Date(d.date)).toLocaleDateString()}</td>
                    <td>{d.quantity}</td>
                    <td>{d.total}</td>
                    <td>{d.tip}</td>
                    <td>{d.type}</td>
                    <td>{d.productIDs.join(',')}</td>
                </tr>
            ))}
        </tbody>
    </table>
)