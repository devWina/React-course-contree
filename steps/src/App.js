import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

/*STATE GUILDSLINES 
- Each compinet has and manages its own state, no matter how many times, we render teh same component 
- Use a state variable for any data that the compnent should keep track of("remember") over time, This is data that will change at some oint
- 
*/

export default function App() {
  return (
    <>
      {/* <Steps color='#7950f2' /> */}
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>!!</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children pro</p>
        <p>!!</p>
      </StepMessage>
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
          <StepMessage step={step}>
            {messages[step - 1]}
            <div className='buttons'>
              <Button
                bgColor='#e7e7e7'
                textColor='#333'
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}>
                Learn how
              </Button>
            </div>
          </StepMessage>
          <div className='buttons'>
            <Button bgColor='#7950f2' textColor='#fff' onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor='#7950f2' textColor='#fff' onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className='message'>
      <h3>Step {step}:</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}>
      {children}
    </button>
  );
}
