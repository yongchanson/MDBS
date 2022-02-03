### 사용 : react, node.js, mongoose, react-redux, antd, react-live-clock, moment , styled-components, globalStyles, react-dark-mode-toggle

### 추가 : castPage, footer 실시간 날짜 및 시간, darkMode

### 폴더구조

```javascript
client
┣ public
┃ ┃ ┗ index.html
┣ src
┃ ┣ \_actions
┃ ┃ ┣ types.js
┃ ┃ ┗ user_actions.js
┃ ┣ \_reducers
┃ ┃ ┣ index.js
┃ ┃ ┗ user_reducer.js
┃ ┣ components
┃ ┃ ┣ views
┃ ┃ ┃ ┣ Cast
┃ ┃ ┃ ┗ CastPage.js
┃ ┃ ┃ ┣ commons
┃ ┃ ┃ ┃ ┣ GlobalStyles.js
┃ ┃ ┃ ┃ ┣ GridCards.js
┃ ┃ ┃ ┃ ┣ MainImage.js
┃ ┃ ┃ ┃ ┣ NoImg.png
┃ ┃ ┃ ┃ ┣ Theme.js
┃ ┃ ┃ ┃ ┗ ToggleButton.js
┃ ┃ ┃ ┣ FavoritePage
┃ ┃ ┃ ┃ ┣ Favorite.css
┃ ┃ ┃ ┃ ┗ FavoritePage.js
┃ ┃ ┃ ┣ Footer
┃ ┃ ┃ ┃ ┗ Footer.js
┃ ┃ ┃ ┣ LandingPage
┃ ┃ ┃ ┃ ┗ LandingPage.js
┃ ┃ ┃ ┣ Loading
┃ ┃ ┃ ┃ ┣ LoadingPage.js
┃ ┃ ┃ ┃ ┣ Ready.js
┃ ┃ ┃ ┃ ┗ Spinner.js
┃ ┃ ┃ ┣ LoginPage
┃ ┃ ┃ ┃ ┗ LoginPage.js
┃ ┃ ┃ ┣ MovieDetail
┃ ┃ ┃ ┃ ┣ Sections
┃ ┃ ┃ ┃ ┃ ┣ Favorite.js
┃ ┃ ┃ ┃ ┃ ┗ MovieInfo.js
┃ ┃ ┃ ┃ ┗ MovieDetail.js
┃ ┃ ┃ ┣ NavBar
┃ ┃ ┃ ┃ ┣ Sections
┃ ┃ ┃ ┃ ┃ ┣ LeftMenu.js
┃ ┃ ┃ ┃ ┃ ┣ RightMenu.js
┃ ┃ ┃ ┃ ┃ ┗ Navbar.css
┃ ┃ ┃ ┃ ┗ NavBar.js
┃ ┃ ┃ ┗ RegisterPage
┃ ┃ ┃ ┃ ┗ RegisterPage.js
┃ ┃ ┣ App.js
┃ ┃ ┗ config.js
┃ ┗ hoc
┃ ┃ ┗ auth.js
┃ ┣ index.css
┃ ┣ index.js
┃ ┣ serviceWorker.js
┃ ┗ setupProxy.js
server
┣ config
┃ ┣ key.js
┃ ┗ prod.js
┣ middleware
┃ ┗ auth.js
┣ models
┃ ┣ Favorite.js
┃ ┗ User.js
┣ routes
┃ ┣ Favorite.js
┃ ┗ Users.js
┗ index.js
```
