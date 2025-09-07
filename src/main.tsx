import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 폰트 (영문+한글)
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/noto-sans-kr/400.css'
import '@fontsource/noto-sans-kr/500.css'
import '@fontsource/noto-sans-kr/700.css'

import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'

import './index.css'
import App from './App.tsx'

// 전역 타이포 설정 (한글 폴백 포함)
const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'Noto Sans KR',
      'Apple SD Gothic Neo',
      'Malgun Gothic',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif'
    ].join(',')
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
)
