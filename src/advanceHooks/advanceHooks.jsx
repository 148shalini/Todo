import React, {  useCallback, useMemo, useState} from 'react';
import Buttons from './buttons';

const AdvanceHooks = () => {

    const [count, setCount] = useState(0);
    const numbers =  useMemo(()=>Array.from({ length: 100_000_000 }, (_, i) => i + 1),[]);
    // const findElement = useCallback(() => {
    
    //     const target = 99999999;
    //     // Use indexOf to find the element
    //     const index = numbers.indexOf(target);
      
    //     if (index !== -1) {
    //       console.log(`Element ${target} found at index ${index}`);
    //     } else {
    //       console.log(`Element ${target} not found`);
    //     }
    //   },[numbers]);
    const decrement=() => {
        setCount(count-1);
    }
const increment = () => {
        setCount(count+1);
        findElement();
    };
    const findElement = () => {
    
                    const target = 99999999;
                    // Use indexOf to find the element
                    const index = numbers.indexOf(target);
                  
                    if (index !== -1) {
                      console.log(`Element ${target} found at index ${index}`);
                    } else {
                      console.log(`Element ${target} not found`);
                    }
                  }
// Create array from 1 to 100,000,000

    
  return (
    <div>
      <h1>Count: {count}</h1>
      {/* <Buttons /> */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default AdvanceHooks