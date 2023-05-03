
import UserComponent from './components/header/UserComponent';

import PrimaryButton from './components/button/PrimaryButton';
import SecondaryButton from './components/button/SecondaryButton';
import Secondary2Button from './components/button/Secondary2Button';

import Pagination from './components/pagination/paginationButton.tsx/Pagination';
import Tabs from './components/tabs/tabs';
import Header from './components/header/Header';
import BurgerMenu from './components/header/BurgerMenu/BurgerMenu';

function App() {
  return (
    <div>

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
      />

    </div>
  )
}

export default App;
