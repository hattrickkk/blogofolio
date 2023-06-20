
import Tabs from './components/tabs/tabs';


import { Routes, Route, useBeforeUnload } from 'react-router-dom'
import Layout from "./components/layout/Layout"

import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import NewPasswordPage from './pages/NewPasswordPage';
import RegistrationConfirmationPage from './pages/RegistrationConfirmationPage';
import SuccessPage from './pages/SuccessPage';
import { useSelector } from 'react-redux';
import { AppState } from './store';
import { selectThemeState } from './store/theme/selectors';
import ActivationPage from './pages/ActivationPage';
import SinglePostPage from './pages/singlePostPage/SinglePostPage';
import { useCallback, useEffect } from 'react';


function App() {
  const themeState = useSelector(selectThemeState)
  const likedPosts = useSelector((state: AppState) => state.likes.list)

  // localStorage.clear()

  // useBeforeUnload(useCallback(() => {
  //   localStorage.setItem('LIKED_POSTS', JSON.stringify(likedPosts || []))
  // }, [likedPosts]))

  // useEffect(() => {
  //   console.log(localStorage.getItem('LIKED_POSTS') || {})
  // }, [])



  return (
    <div className={themeState.theme}>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Tabs />} />

          <Route path='posts/singlePage/:postId' element={<SinglePostPage />} />

          <Route path='sign-in' element={<SignInPage />} />
          <Route path='sign-up' element={<SignUpPage />} />
          <Route path='reset-password' element={<ResetPasswordPage />} />
          <Route path='new-password' element={<NewPasswordPage />} />

          <Route path='registration-confirmation' element={<RegistrationConfirmationPage />} />
          <Route path='activate/:uid/:token' element={<ActivationPage />} />
          <Route path='success' element={<SuccessPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
