import { Container, Typography, Box } from '@mui/material'

const Home = () => {
  return (
    <>
      <Box
        component='section'
        sx={{ border: 'solid red', minHeight: '100dvh' }}></Box>
      <Box
        component='section'
        sx={{ border: 'solid yellow', py: { xs: 10, md: 14 } }}></Box>
      <Box
        component='section'
        sx={{ border: 'solid blue', py: { xs: 10, md: 14 } }}></Box>
      <Box
        component='section'
        sx={{ border: 'solid black', py: { xs: 10, md: 14 } }}></Box>
    </>
  )
}

export default Home

/**
[사용된 컴포넌트]
1. Container
  - 콘텐츠를 수평 중앙 정렬하고, maxWidth로 반응형 폭을 관리
2. Typography
  - variant = 스타일(보이는 모습), component = 시맨틱 태그(의미/DOM)


[개념 정리]
1. py
  - padding-top + padding-bottom을 한 번에 주는 MUI System의 축(shorthand)입니다. 즉 Y축 패딩.
  - p 전체 패딩, px(좌/우), py(상/하), pt/pr/pb/pl(개별)
2. minHeight: '100dvh'
  - “뷰포트 한 화면” + “헤더 높이"

 */
