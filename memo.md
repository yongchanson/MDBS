mainimage //여러군데서 쓰이니 commons로 옮길것 -> 완료
actorimg,movieimg null값지정(빈이미지) -> 완료
로고변경
애니메이션 -> 같은코드인데 작동을 하지 않음(애니메이션 효과가 적용x)

- alt인 경우 이미지크기 다른부분 확인 -> noIMmg.png을 삽입하는 형태로 해결..alt를 텍스트로 넣을까 고민중

- 푸터실시간 변경(+format까지) -> 완료 : react-live-clock을 사용(moment-timezone도 같이 설치해야 작동함)

- error : Can't import the named export 'Children' from non EcmaScript module (only default export is available)

  - import { motion } from 'framer-motion/dist/es/index'
  - 나중에 경로를 기본으로 설정해도 잘 작동됨.. "framer-motion"이 5번대버전->4번대로 다운그레이드하면서 해결된 것으로 추정

- error : Uncaught TypeError: undefined is not a function
  at Module../node_modules/framer-motion/dist/es/context/LazyContext.mjs

  - "framer-motion": "^4.1.17" 으로 다운그레이드 후 해결

- antd

- react 애니메이션 다크모드
  - 문제점 : 새고로침(페이지이동시초기화), 제목, 표안의글씨 등이 바뀌지 않는 부분, 헤더적용x
- helmet사용하기
