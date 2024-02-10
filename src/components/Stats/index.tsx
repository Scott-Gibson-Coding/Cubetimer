import type { Solve } from "../../types";

type StatsProps = {
  solves: Array<Solve>;
};
const Stats = ({ solves }: StatsProps) => {
  return (
    <div className="border-2 border-black p-8">
      {/* Stats card */}
      <div className="bg-primary text-light grid gap-4 rounded-lg px-8 py-4">
        {/* Buttons */}
        <div className="flex justify-center font-semibold underline underline-offset-2">
          <button>Clear Times</button>
        </div>
        {/* Times list card */}
        <div className="bg-secondary mx-auto h-[40vh] w-80 overflow-y-auto rounded p-2">
          <ul>
            {solves.map(({ time }, index) => (
              <li key={index} className="text-dark flex justify-around">
                <span className="font-semibold">{solves.length - index}</span>
                <span className="font-mono tracking-tight">{time}</span>
                <span className="">
                  <button className="font-semibold underline underline-offset-2">
                    x
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stats;
