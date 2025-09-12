import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  ListItemButton,
  Drawer,
  List,
  ListItemText
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/react.svg'

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Interview', path: '/interview' },
  { label: 'Recruit', path: '/recruit' }
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false) // useState<boolean>(false)으로 안해도 된다. 현재 boolean으로 정확히 추론.

  return (
    <>
      <AppBar
        position='sticky' // 이 설정으로 헤더가 레이아웃을 “차지”하므로 각 페이지에서 마진/패딩을 따로 뺄 필요가 없다.
        sx={{
          background: 'orange',
          boxShadow: 'none',
          height: '4rem'
        }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Box컴포넌트에 이미지를 넣는다. 이때, component를 img로 해줘야 img가 렌더링 된다. */}
          <Box
            component={NavLink}
            to={'/'}>
            <Box
              component='img'
              src={logo}
              alt='logo'
              sx={{ height: 50 }}
            />
          </Box>
          {/* 메뉴 네비게이션  (sm 이상에서 노출)  */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              width: '40rem',
              justifyContent: 'space-between',
              height: '100%',
              gap: '1rem'
            }}>
            {pages.map((p, idx) => (
              <Button
                key={idx}
                component={NavLink}
                to={p.path}
                sx={{
                  color: 'white',
                  fontSize: '1rem',
                  '&.active': { color: 'lime' },
                  '&:hover': { fontSize: '1.2rem' },
                  width: '15rem'
                }}>
                {p.label}
              </Button>
            ))}
          </Box>

          {/* 화면 줄어들면 햄버거 버튼  (sm 미만에서 노출) */}
          <IconButton
            onClick={() => setIsOpen(true)}
            sx={{ display: { xs: 'flex', sm: 'none' }, color: 'white' }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 오른쪽 사이드 슬라이드 */}
      <Drawer
        anchor='right'
        open={isOpen}
        onClose={() => setIsOpen(false)} // 배경 클릭 or ESC로 닫힘
        slotProps={{ paper: { sx: { width: 100 } } }} // v7 부터 paper 사용
      >
        <Box role='presentation'>
          <List>
            {pages.map((p, idx) => (
              <ListItemButton
                component={NavLink}
                to={p.path}
                key={idx}
                onClick={() => setIsOpen(false)}
                sx={{
                  '&.active': { bgcolor: 'orange', color: 'black' }
                }}>
                <ListItemText primary={p.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Header

/**
[사용된 컴포넌트]
1. AppBar
  - MUI에서 헤더(Top Navigation Bar) 구현할 때 기본적으로 사용하는 컴포넌트.
2. Toolbar
  - 내부를 정렬하는 용도.
  - 세부 배치(좌우 정렬, flex 등)는 Box로 감싸서 조절.
3. Drawer
  - 
4. IconButton
  - 아이콘 전용 버튼: 아이콘 하나를 눌러 액션을 수행하는 용도.
5. List
  - 리스트 그룹 래퍼. 기본적으로 <ul>로 렌더링
6. ListItemButton
  - 리스트에서 클릭 가능한 액션 항목. 내비게이션 링크/메뉴 선택에 사용
7. ListItemText
  - 항목 안의 텍스트 컨테이너. primary(메인 텍스트), secondary(보조 텍스트) 제공. 내부에서 기본적으로 Typography로 감싸 렌더링됨


[정리]
1. 이미지 컴포넌트는 따로 없다. Box의 component='img'로 하자.

2. 제네릭을 명시해야 할 때.
  - 초기값이 null/undefined일 때
    ex) const [data, setData] = useState<User | null>(null);
  - 빈 배열/객체로 시작할 때
    ex) const [list, setList] = useState<Item[]>([]);
  - 의도된 리터럴 유니온을 쓸 때
    ex) const [status, setStatus] = useState<'idle'|'loading'|'done'>('idle');

3. Drawer에 role="presentation"
  - 이 요소는 레이아웃용일 뿐, 의미(시멘틱)를 스크린리더에 노출하지 마라는 표시예요. 접근성 트리에서 거의 사라진다.
  - 리스트 외곽 래퍼는 시멘틱 제거(스크린리더가 쓸데없이 읽지 않도록

  4. primary={p}의 의미
  - ListItemText의 메인 텍스트를 넣는 prop. 문자열이든 React 노드든 가능.
  - 기본적으로 이 값이 Typography로 감싸져 렌더
 */
