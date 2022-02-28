# MDBS

이 프로젝트는 프론트엔드(React) + 백엔드(Node.js) 기반의 영화관련 정보를 보여주는 웹사이트이며, 영화정보는 오픈API(TMDB)를 사용하였다. 기본구조는 boilerplate을 활용하여 제작하였다.

배포사이트 : https://mdbs.herokuapp.com/

> TMDB : https://www.themoviedb.org/?language=ko

> boilerplate : https://github.com/jaewonhimnae/boilerplate-mern-stack

---

# 새롭게 만든 것

### 1. 테마변경(다크모드/화이트모드)

로컬스토리지(키 : themes)를 이용한 테마변경을 기능을 구현함. 토글버튼은 react-dark-mode-toggle을 사용하였고 메뉴는 antd에서 제공하는 다크모드를 사용함. 나머지부분은 styled-components을 사용하여 구현하였음.
![darkmode](https://user-images.githubusercontent.com/84462830/155286991-d100a755-2d7e-4363-8e74-291745d132a2.gif)

> react-dark-mode-toggle : https://www.npmjs.com/package/react-dark-mode-toggle

> antd 메뉴 다크모드/라이트모드 : https://ant.design/components/menu/#components-menu-demo-theme

> styled-components 적용한 부분(theme.js) : https://github.com/yongchanson/MDBS/blob/2ef27fc28347d026a6c122f67172d417cc6d93dc/client/src/components/views/commons/theme.js

### 2. 로고

NavBar 로고 및 애니메이션효과 추가하였음. 그림판으로 png파일을 생성하고 이를 svg파일로 변환 후 "framer-motion"을 사용하여 애니메이션효과를 추가함(Hover, Path)

![mdbslogo](https://user-images.githubusercontent.com/84462830/155280482-18486350-6cd4-4b22-97f1-d6a390334988.gif)

> Hover : https://www.framer.com/docs/gestures/#hover
> Path : https://www.framer.com/motion/
> png -> svg 변환 : https://convertio.co/kr/

### 3. footer

실시간 날짜 및 시간 표시

![footer](https://user-images.githubusercontent.com/84462830/155281875-ade16b07-da9f-4830-8261-05d9e128c6e1.gif)

### 5. CastPage : TMDB를 통해 배우이미지에 링크추가 및 출연한 영화리스트 표시

![castpage](https://user-images.githubusercontent.com/84462830/155287216-a257535d-14fd-444e-90b2-bd30ed04e3b2.gif)

### 6. Helmet : 타이틀, 파비콘 변경

![helmet](https://user-images.githubusercontent.com/84462830/155297361-ddab82b2-96a9-46f0-acde-feb1152bf248.gif)

> React Helmet : https://www.npmjs.com/package/react-helmet

### 7. LoadingPage

Spinner을 활용한 로딩페이지 출력

![loading](https://user-images.githubusercontent.com/84462830/155567233-8ee1afa2-7545-4802-8172-8a2afce34253.gif)

> https://github.com/yongchanson/MDBS/blob/645c463930e1464200d0645cd13154534cc449f5/client/src/components/views/Loading/LoadingPage.js

> https://github.com/yongchanson/MDBS/blob/645c463930e1464200d0645cd13154534cc449f5/client/src/components/views/Loading/Spinner.js

---

# 제작하면서 어려웠던 점

- 다크모드 : 지인분이 넷플릭스가 다크모드라서 사용하기 싫다는 얘기를 먹고 충격을 먹었다. 화이트모드/다크모드가 UI에 이렇게 큰 영향을 미치는지 알게 되었고 필수기능이라 생각되어 초반에 만들었음. 메뉴부분이 테마변경 시 약간 어색한데 좋은 아이디어가 생기면 수정해보겠음.
- 로딩페이지 : 배포하니까 페이지 이동 시 ,로딩페이지 대신 흰화면을 경유하여 페이지 이동을 한다. 원인 자체를 모르겠음.
- 배포 : 배포과정이 매우 오래 걸림(약20일), 예전에 강의보면서 1번해보고 2번째인데 화면을 정상적으로 나오는데는 오래 걸리지 않았는데 보안상 쿠키가 전달되지 않은 것 때문에 시간이 오래 걸렸다.
- 개발하면서 막히는게 있을때마다 조금씩 적은 것 : memo.md
  > https://github.com/yongchanson/MDBS/blob/c173a931cc5b00c46a025200b070b34ed5aaaa5f/memo.md

---

# 제작하면서 사용한 것

react, node.js, mongoose, mongoDB, react-redux, antd, react-live-clock, styled-components, globalStyles, react-dark-mode-toggle, Spinner

---

## 폴더구조

```javascript
client
┣ public
┃ ┃ ┣ _redirects
┃ ┃ ┗ index.html
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
