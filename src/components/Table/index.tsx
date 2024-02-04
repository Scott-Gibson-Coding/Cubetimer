import type { Solve } from "../../types";
import "./style.css";

type TableProps = {
  solves: Array<Solve>;
};
const Table = ({ solves }: TableProps) => {
  return (
    <div className="table-container">
      <table className="table">
        <tbody>
          {solves.map((solve, index) => (
            <tr key={index}>
              <td>{solves.length - index}</td>
              <td>{solve.time}</td>
              <td>x</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
