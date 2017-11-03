import React from 'react';
import Example from '../lib';
import { SecondExample, Button } from '../lib';

const App = () => (
  <div>
    <Example />
    <SecondExample />
    <Button secondary >i am a button</Button>
  </div>
);

export default App;
