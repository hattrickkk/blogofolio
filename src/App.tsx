
import UserComponent from './components/header/UserComponent';

import PrimaryButton from './IU/button/PrimaryButton';
import SecondaryButton from './IU/button/SecondaryButton';
import Secondary2Button from './IU/button/Secondary2Button';

import Tabs from './components/tabs/tabs';


import { Routes, Route } from 'react-router-dom'
import Layout from "./components/layout/Layout"

import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Tabs />} />
          <Route path='sign-in' element={<SignInPage />} />
          <Route path='sign-up' element={<SignUpPage />} />
          <Route path='reset-password' element={<SignInPage />} />
        </Route>
      </Routes>



      {/* 
      <Header />

      <Tabs />

      <Pagination />

      <PrimaryButton
        value='Primary'
        onClick={() => console.log('sd')}
      />
      <PrimaryButton
        value='Primary'
        disabled={true}
      />

      <SecondaryButton
        value='Secondary'
      />
      <SecondaryButton
        value='Secondary'
        disabled={true}
      />

      <Secondary2Button
        value='Secondary2'
      />
      <Secondary2Button
        value='Secondary2'
        disabled={true}
      /> */}

    </div>
  )
}

export default App;
