import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

/*STATE GUIDELINES 
- Each compinet has and manages its own state, no matter how many times, we render teh same component 
- Use a state variable for any data that the compnent should keep track of("remember") over time, This is data that will change at some oint
- 
*/

export default function App() {
  return (
    <>
      <Steps />
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: 'wina' });

  const handlePrevious = () => {
    if (step > 1) setStep((curStep) => curStep - 1); //updating state based in the current value of that state
  };
  const handleNextTwice = () => {
    if (step < 3) setStep((curStep) => curStep + 2);

    // BAD PRACTICE
    // test.name = 'Fred';
    // setTest({ name: 'Fred' }); //best practice
  };
  const handleNext = () => {
    if (step < 3) setStep((curStep) => curStep + 1);

    // BAD PRACTICE
    // test.name = 'Fred';
    // setTest({ name: 'Fred' }); //best practice
  };

  return (
    <div>
      <button className='close' onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className='message'>
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className='buttons'>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handlePrevious}>
              Previous
            </button>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNext}>
              Next
            </button>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNextTwice}>
              Next x2
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
