import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ item }) => {
    return (
        <table className={styles.transaktionTable}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
        </table>
        <tbody>
                {item.map(({ id, type, amount, currency}) => (
                  <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                 </tr>
                ))}
                </tbody>
        </table>
    );
};