
import UserComponent from './components/userComponent';
import Post from './components/post/Posts';
import PrimaryButton from './components/button/PrimaryButton';
import SecondaryButton from './components/button/SecondaryButton';
import Secondary2Button from './components/button/Secondary2Button';
import LikeButton from './components/button/LikeButton';
import DislikeButton from './components/button/DislikeButton';
import PaginationButton from './components/pagination/paginationButton.tsx/PaginationButton';
import Pagination from './components/pagination/paginationButton.tsx/Pagination';
import Tabs from './components/tabs/tabs';

function App() {
  return (
    <div>


      <Tabs />

      <UserComponent userName='Darya Khitrik' />
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
