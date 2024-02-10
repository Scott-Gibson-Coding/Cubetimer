import type { Solve } from "../../types";

type TableProps = {
  solves: Array<Solve>;
};
const Table = ({ solves }: TableProps) => {
  return (
    <div className="">
      <table className="">
        <tbody className="">
          {solves.map((solve, index) => (
            <tr key={index} className="">
              <td className="">{solves.length - index}</td>
              <td className="">{solve.time}</td>
              <td className="">x</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
