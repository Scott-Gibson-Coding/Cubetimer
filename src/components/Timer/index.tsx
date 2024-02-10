const Timer = () => {
  const scramble =
    "D R2 D2 U' B2 D' R2 U2 R B L' R' F L2 U' L B F2 L F' L2 D' B' U F";

  return (
    <div className="grid content-center gap-2 border-2 border-black px-8 font-mono">
      <h1 className="text-8xl">Cubetimer</h1>
      {/* Scramble div */}
      <div className="bg-primary mb-8 rounded p-1">
        <p className="text-light text-center text-xl">
          Scramble: <span className="tracking-tighter">{scramble}</span>
        </p>
      </div>
      {/* Timer div */}
      <div className=" text-center text-8xl">00:00.000</div>
    </div>
  );
};

export default Timer;
