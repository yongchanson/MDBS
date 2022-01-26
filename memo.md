### mainimage : 여러군데 사용... commons로 옮길것 -> 완료

## actorimg, movieimg 크기가 달라지는 부분이 있음 -> alt값 대신 빈이미지가 삽입되도록 수정

## 애니메이션 -> 같은코드인데 작동을 하지 않음(애니메이션 효과만 적용x)

## 로고변경 -> 일단 보류

### 푸터실시간 변경(+format까지) -> react-live-clock을 사용(moment-timezone도 같이 설치해야 작동함)

### error : Can't import the named export 'Children' from non EcmaScript module (only default export is available)

- import { motion } from 'framer-motion/dist/es/index'
- 나중에 경로를 기본으로 설정해도 잘 작동됨.. "framer-motion"이 5번대버전->4번대로 다운그레이드하면서 해결된 것으로 추정

### error : Uncaught TypeError: undefined is not a function

at Module../node_modules/framer-motion/dist/es/context/LazyContext.mjs

- "framer-motion": "^4.1.17" 으로 다운그레이드 후 해결

### error : MovieDetail에서 Warning: Updating a style property during rerender (background) when a conflicting property is set (backgroundPosition) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.

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

- 위의코드를 추가하여 해결함(원인 : 리렌더링 될때 값이 없어도 css 속성이 렌더링 되버려서 생기는 부분)

### antd

### react 애니메이션 다크모드 : 문제점(새로고침을 제외하고 원인은 antd와 관련있어 보인다.)

- 새고로침 -> 다크모드버튼을 app -> nav로 이동하면서 해결됨
- 페이지이동시초기화->로컬스토리지에 넣어서 해결할 예정(스토리지에 넣고 값까지 유지시키는건 성공했는데 테마가 적용되지 않음..)->localStorage.getItem("themes")가 string이라서 적용이 안되었음(값이 있으면 항상 ture반환)..조건문을 활용하여 해결해두었음
- 제목 -> 기존에 <h2>을 <div style={{}}> 으로 변경
- 헤더의 메뉴부분 적용 -> 메뉴를 styled.div와 a로 감싸서 해결하였다.
- 표안의글씨 등이 바뀌지 않는 부분 -> antd을 사용하지 않고 표 작성하여 해결
- toggleButton의 styled를 따로 파일을 만들어서 한꺼번에 적용하려고 했으나 실패...임시로 각 파일에 적용시킴-> export로 보내주는 형식으로 해결
- toggleButton에 theme를 '실시간'으로 보내주지 못함(페이지이동시에는 보내짐) -> 의도하는 방향은 아니지만 배경색고정, 글자색(text)=보더색(border)으로 구현함
- 회원강비 텍스트 다크모드 적용하기

### alt인 경우 이미지크기 다른부분 확인 -> noImg.png을 삽입하는 형태로 해결..alt를 텍스트로 추가 고민중 -> noImg을 background으로 보내려다가 실패..

### theme, globalStyles 등도 commons로 옮길 것 -> 완료

## helmet사용하기

## 로딩문제해결

## 작은화면 오른쪽 사이드메뉴 bgcolor 수정
