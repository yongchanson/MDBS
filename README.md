# MDBS

이 프로젝트는 React + Node.js 기반의 영화관련 정보를 보여주는 웹사이트이며, 영화정보는 오픈API(TMDB)를 사용하였다. 기본구조는 boilerplate을 활용하여 제작하였다.

> TMDB : https://www.themoviedb.org/?language=ko

> boilerplate : https://github.com/jaewonhimnae/boilerplate-mern-stack

---

## 새롭게 만든 것

- 테마변경(다크모드/화이트모드) : 로컬스토리지(키 : themes)를 이용한 테마변경을 기능을 구현함. 토글버튼은 react-dark-mode-toggle을 사용하였고 메뉴는 antd에서 제공하는 다크모드를 사용함. 나머지부분은 styled-components을 사용하여 구현하였음.
  ![darkmode](https://user-images.githubusercontent.com/84462830/155286991-d100a755-2d7e-4363-8e74-291745d132a2.gif)

  > react-dark-mode-toggle : https://www.npmjs.com/package/react-dark-mode-toggle

  > antd : https://ant.design/components/menu/#components-menu-demo-theme

  > styled-components 사용한 부분(theme.js) : https://github.com/yongchanson/MDBS/blob/2ef27fc28347d026a6c122f67172d417cc6d93dc/client/src/components/views/commons/theme.js#L1

- 로고 : NavBar 로고 및 애니메이션효과 추가하였음. 그림판으로 png파일을 생성하고 이를 svg파일로 변환 후 "framer-motion"을 사용하여 애니메이션효과를 추가함
  ![mdbslogo](https://user-images.githubusercontent.com/84462830/155280482-18486350-6cd4-4b22-97f1-d6a390334988.gif)

- footer - 실시간 날짜 및 시간 표시
  ![footer](https://user-images.githubusercontent.com/84462830/155281875-ade16b07-da9f-4830-8261-05d9e128c6e1.gif)

- CastPage : TMDB를 통해 배우이미지에 링크추가 및 출연한 영화리스트 표시
  ![castpage](https://user-images.githubusercontent.com/84462830/155287216-a257535d-14fd-444e-90b2-bd30ed04e3b2.gif)

> png -> svg 변환 : https://convertio.co/kr/

- Helmet

- LoadingPage : Spinner을 활용한 로딩페이지 출력

---

## 웹사이트를 제작하면서 배운 것

react, node.js, mongoose, react-redux, antd, react-live-clock, styled-components, globalStyles, react-dark-mode-toggle, Spinner

## 웹사이트를 제작하면서 어려웠던 점

## 폴더구조

```javascript
client
┣ public
┃ ┃ ┣ _redirects
┃ ┃ ┣ index.html
┃ ┃ ┗ MDBS_LOGO.png
┣ src
┃ ┣ _actions
┃ ┃ ┣ types.js
┃ ┃ ┗ user_actions.js
┃ ┣ _reducers
┃ ┃ ┣ index.js
┃ ┃ ┗ user_reducer.js
┃ ┣ components
┃ ┃ ┣ views
┃ ┃ ┃ ┣ Cast
┃ ┃ ┃ ┃ ┗ CastPage.js
┃ ┃ ┃ ┣ commons
┃ ┃ ┃ ┃ ┣ globalStyles.js
┃ ┃ ┃ ┃ ┣ GridCards.js
┃ ┃ ┃ ┃ ┣ MainImage.js
┃ ┃ ┃ ┃ ┣ MDBS_LOGO.png
┃ ┃ ┃ ┃ ┣ noImg.png
┃ ┃ ┃ ┃ ┣ theme.js
┃ ┃ ┃ ┃ ┗ toggleButton.js
┃ ┃ ┃ ┣ FavoritePage
┃ ┃ ┃ ┃ ┣ favorite.css
┃ ┃ ┃ ┃ ┗ FavoritePage.js
┃ ┃ ┃ ┣ Footer
┃ ┃ ┃ ┃ ┗ Footer.js
┃ ┃ ┃ ┣ LandingPage
┃ ┃ ┃ ┃ ┗ LandingPage.js
┃ ┃ ┃ ┣ Loading
┃ ┃ ┃ ┃ ┣ LoadingPage.js
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
┃ ┃ ┃ ┣ RegisterPage
┃ ┃ ┃ ┃ ┗ RegisterPage.js
┃ ┃ ┣ App.js
┃ ┃ ┣ config.js
┃ ┣ hoc
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
