### Footer 실시간 시간표시 -> react-live-clock 사용(moment-timezone도 같이 설치해야 작동함)

### ERROR : Can't import the named export 'Children' from non EcmaScript module (only default export is available)

- `import { motion } from 'framer-motion/dist/es/index';` 으로 경로변경 OR
- "framer-motion" 5번대버전 -> "^4.1.17"으로 다운그레이드

### ERROR : Uncaught TypeError: undefined is not a function at Module../node_modules/framer-motion/dist/es/context/LazyContext.mjs

- "framer-motion": "^4.1.17" 으로 다운그레이드 후 해결

### ERROR : MovieDetail에서 Warning: Updating a style property during rerender (background) when a conflicting property is set (backgroundPosition) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.

```script
  1. const [MainMovieImage, setMainMovieImage] = useState(null);
  2. fetch(endpointInfo)
  .then((response) => response.json())
  .then((response) => {
    // console.log(response)
    setMovie(response);
    setMainMovieImage(response);
  });
  3. {MainMovieImage && (
  <MainImage
    image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
    title={Movie.title}
    text={Movie.overview}
  />
  )}
```

위의코드를 추가하여 해결함(원인 : 리렌더링 될때 값이 없어도 css 속성이 렌더링 되어 생기는 부분)

### ERROR : Manifest: Line: 1, column: 1, Syntax error.

- client-public-index.html의 `<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />`을 주석처리하니 사라졌다. (정확한 원인은 모르겠으나 파일이름을 변경하면서 생긴 것 같다.)

### react 라이트모드/다크모드(테마변경)

- 테마변경 시 새고로침이 되는 현상 -> 테마변경 버튼을 APP.js -> NavBar.js로 이동하면서 해결됨
- 페이지이동시 테마초기화 -> 로컬스토리지에 넣어서 해결할 예정(스토리지에 넣고 값까지 유지시키는건 성공했는데 테마가 적용되지 않음..) -> 원인은 localStorage.getItem("themes")가 string이여서 : 조건문을 사용하여 해결함 `localStorage.getItem("themes") === "false" ? false : true;`
  (처음에 Boolean으로 type을 변경하였더니 값이 있으면 항상 ture을 반환하여 조건문을 사용함)
- 제목부분 테마변경X -> 기존 제목은 `<h2>`을 사용하였고 `<div style={{}}>`으로 변경하여 테마변경
- 헤더의 메뉴(홈, 즐겨찾기...) 바깥 테두리부분 테마변경X -> 메뉴를 <a>와 styled.div로 감싸서 해결함

```javascript
<a href="/">
  <Menus>홈</Menus>
</a>
```

```javascript
export const Menus = styled.div`
  transition: all 0.3s linear;
  padding: 0px 20px;
`;
```

- ToggleButton의 테마가 변경되지 않음(페이지 이동시 가지고 있는 테마를 그대로 유지함)
- 라이트모드 상태로 페이지 이동시 ToggleButton에 테마가 적용x(반대상황은 적용)
- 작은화면일시 생성되는 오른쪽 사이드메뉴(Drawer) 테마변경 되도록 변경
  - antd에서 지원하는 dark/light mode를 이용하였음(원래는 기존의 App.js, NavBar.js처럼 Theme.js을 이용하려 했으나, 메뉴 바깥부분의 여백이 생기는 등의 좋지못한 결과가 있었음)
- 작은화면일시 생성되는 오른쪽 사이드메뉴(Drawer) 아래 background-color 수정
  - NavBar.css의 .ant-drawer-wrapper-body의 background-color를 수정하면 변경이 가능하다.
  - scss 사용하여 조건에 따라 배경색 변경까지는 성공, 하지만 원하는 조건을 받아 색상을 변경하는 것은 실패하였다. 색상을 transport -> #3e91f7 으로 변경

```javascript
1. 코드추가 : const [theme, setTheme] = useState(localValue);
2. ToggleButton 조건변경 : theme={localValue} -> theme={theme === localValue}
```

### title / favicon 이미지 변경 -> React-Helmet을 사용하여 변경

### 같은계정에서 같은영화를 여러번 즐겨찾기에 추가할 수 있는 현상 발견 -> 즐겨찾기 추가버튼(ToggleButton)이 클릭되거나, 테마변경하면서 생기는 것으로 추정되어 다음과 같이 코드를 수정하였다.(기존에 theme를 사용하고 있지 않았기에 변화는 없음)

```javascript
export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
`;
export const Button = styled.button`
  border: 2px solid;
`;
```

### 이메일 저장기능 추가

### NavBar 로고 및 애니메이션효과 추가 : png파일을 svg파일로 변환(https://convertio.co/kr/) 후 "framer-motion"을 사용하여 애니메이션효과 추가(페이지로딩, 테마변경, 마우스hover의 조건 시 애니메이션효과)

## 로딩문제(NavBar, Footer는 로딩속도 > api를 통해 불러오는 이미지, 글의 로딩속도) -> react-query시도했는데 큰 변화가 안보임(index.js 파일에 <QueryClientProvider> 사용) -> LoadingPage만들어서 페이지가 로딩되기 이전에 보여주도록 구현(로딩시 영화title이 살짝 움직이는 증상있음)

- useEffect를 사용하여 일정시간(200~)이 지나면 페이지가 나오도록 구현(디자인은 Spinner사용) -> useQuery로 바꿀지 고민중(undefined으로 나와서 원인 찾는중...) -> 원인 : 반드시 const { isLoading }이 들어가야 Object에 값이 들어가는 것을 확인하였다. (loading, Loading 등은 불가능) -> 랜딩, 디테일, 캐스트 페이지는 api에서 정보를 불러오면 로딩이 되도록 구현(배너와 푸터는 어떤 정보를 기준으로 로딩할지 고민중...)
- error : 'React' must be in scope when using JSX react/react-in-jsx-scope
  - import React from "react"; 추가
- error : Attempted import error
  - export default TodoContext;-> import TodoProviderfrom './TodoContext';
  - export TodoContext; -> import { TodoProvider } from './TodoContext';
- NavBar메뉴가 로딩시 로그아웃->로그인,가입하기로 변화하는데 이부분은 로딩페이지를 구현하면서 2초 후 나오도록 하였음(배너의 조건문으로 순서는 변경가능할 듯...ex)로그인->로그아웃)

## 페이지이동시 `<a href>` 대신 `<Link to>`을 사용하려고 했으나 로딩페이지를 거치기 않고 바로 이동하여 보류...

## api에서 이미지가 없어서 불러오지 못하는 경우를 대비해 alt를 넣어두었음 -> alt의 크기가 다른 부분이 존재(정상적으로 불러온 이미지와 같은 크기도 있지만, 아닌 경우도 있음) -> 이미자가 없으면 noImg.png을 삽입하는 형태로 변경..noImg.png 위에 텍스를 삽입하면 더 좋을것 같다고 생각됨 -> noImg.png을 background으로 보내려다가 실패하였음...일단 보류

# 배포작업

## 프론트엔드(react, FolderName:client)는 Netlify로 배포, 백엔드(node.js, FolderName:server)는 heroku를 통해 배포하였음

## 프론트엔드 루트페이지( "/" )는 접속가능하지만, 다른 페이지로 페이지이동 불가(페이지이동 시 not found) -> client/public/\_redirects 파일을 생성하여 해결함

## 회원가입, 로그인이 불가능한 현상(프론트엔드와 백엔드가 연결되지 않아 생기는 현상으로 추정) -> client/src/components/Config.js의 Line 1 : USER_SERVER을 api/users -> {백엔드주소}/api/users으로 변경하여 연결 성공함(문제 : 회원가입 가능, 로그인 불가능)

## 회원가입 가능, 로그인 불가능한 문제 -> 서브도메인이 달라 쿠키를 보내지 못하는 것으로 추정됨(프론트엔드 : mdbs.herokuapp.com, 백엔드 : mdbs.netlify.app) -> 호스팅케이알이라는 곳에서 1650원에 도메인을 구입하여 서브도메인을 동일하게 변경하였음 -> 프론트엔드는 https, 백엔드는 http이여서 전송하지 못하는 현상이 있음... heroku는 7달러를 결제해야 도메인커스텀 시 https를 사용할 수 있다고 함...백엔드를 다른 사이트를 통해 배포할지 고민중...

- Error : `Mixed Content: The page at 'https://{프론트엔드주소}/login' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://{백엔드주소}/api/users/auth'. This request has been blocked; the content must be served over HTTPS.`
