import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="counters">
        <Counter
          name="Step"
          state={step}
          setState={setStep}
          limitDec={1}
          step={1}
        />
        <Counter
          name="Count"
          state={count}
          setState={setCount}
          limitDec={null}
          step={step}
        />
      </div>
      <ShowDate count={count} />
    </div>
  );
}

function Counter({ name, state, setState, limitDec, step }) {
  const handleDec = () => {
    if (limitDec === null || state > limitDec) setState((cur) => cur - step);
  };

  const handleInc = () => setState((cur) => cur + step);

  return (
    <div className="counter">
      <button onClick={handleDec}>-</button>
      <span>
        {name}: {state}
      </span>
      <button onClick={handleInc}>+</button>
    </div>
  );
}

function ShowDate({ count }) {
  let time = new Date();
  time.setDate(time.getDate() + count);
  return (
    <p className="date">
      {count === 0 && "Today is "}
      {count < 0 && `${-count} days ago was `}
      {count > 0 && `${count} days from today is `}
      {time.toDateString()}
    </p>
  );
}

export default App;
