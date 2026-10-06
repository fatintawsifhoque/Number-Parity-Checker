import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState(null);
  const [st, setSt] = useState('');

  const result = (e) => {
    const val = e.target.value;
    setInput(val);

    if (val === '' || val === null) {
      setSt('');
      return;
    }

    if (val % 2 === 0) {
      setSt('Even');
    } else {
      setSt('Odd');
    }
  };

  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center bg-slate-200">
      <input 
        type="number" 
        className="border h-12 rounded-lg outline-none pl-2" 
        onChange={result} 
      />
      {st && (
        <h2 className="mt-5">
          <span className="text-xl font-bold">{input}</span> is a <span className="text-xl font-bold">{st}</span> number
        </h2>
      )}
    </section>
  );
};

export default App;