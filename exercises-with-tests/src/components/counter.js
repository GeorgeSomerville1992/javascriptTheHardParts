import React, { useState } from 'react'
import { Button } from 'antd';
const Counter = () => {
  const [count, setCounter] = useState(0);

  return (
    <div>
      <h3>Counter</h3>
      <div> the count is {count} </div>
      <Button onClick={() => setCounter(count + 1)}>increase</Button>
      <Button onClick={() => setCounter(count -1 )}>decrease</Button>
    </div>
  );
}

export default Counter;
