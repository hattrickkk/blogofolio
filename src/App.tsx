import React from 'react';
import Button from './components/button/Button';
import UserComponent from './components/userComponent';

function App() {
  return (
    <>

      <UserComponent userName='Darya Khitrik' />

      <Button
        value='Primary'
        type='primary'
        onClick={() => console.log('sd')}
      />

      <Button
        value='Primary'
        type='primary'
        disabled={true}
      />
      <Button
        value='Secondary'
        type='secondary'
      />
      <Button
        disabled={true}
        value='Secondary'
        type='secondary'
      />
      <Button
        value='Secondary2'
        type='secondary2'
      />
      <Button
        disabled={true}
        value='Secondary2'
        type='secondary2'
      />
    </>
  )
}

export default App;
