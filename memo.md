mainimage //여러군데서 쓰이니 commons로 옮길것 -> 완료
actorimg,movieimg null값지정(빈이미지) -> 완료
로고변경
애니메이션

alt인 경우 이미지크기 다른부분 확인
푸터실시간 변경(+format까지)

- Can't import the named export 'Children' from non EcmaScript module (only default export is available)

  - import { motion } from 'framer-motion/dist/es/index'
  - 나중에 경로를 기본으로 설정해도 잘 작동됨.. "framer-motion"이 5번대여서 생긴걸로 추정

- 헤더 애니메이션 효과가 적용x

- Uncaught TypeError: undefined is not a function
  at Module../node_modules/framer-motion/dist/es/context/LazyContext.mjs
  - "framer-motion": "^4.1.17" 으로 다운그레이드 후 해결
