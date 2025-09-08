import { AppBar, Box, Toolbar, Button } from '@mui/material'
import { useState } from 'react'
import logo from '../assets/react.svg'

const pages = [
  'Home',
  'About Us',
  'Portfolio',
  'Interview',
  'Gallery',
  'Recruit'
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false) // useState<boolean>(false)으로 안해도 된다. 현재 boolean으로 정확히 추론.

  return (
    <AppBar
      position='static'
      sx={{
        background: 'orange'
      }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Box컴포넌트에 이미지를 넣는다. 이때, component를 img로 해줘야 img가 렌더링 된다. */}
        <Box
          component='img'
          src={logo}
          alt='logo'
          sx={{ height: 40 }}
        />
        {/* 메뉴 버튼들 */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {pages.map((p, idx) => (
            <Button
              key={idx}
              sx={{ color: 'white' }}>
              {p}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header

/**
1. AppBar
  - MUI에서 헤더(Top Navigation Bar) 구현할 때 기본적으로 사용하는 컴포넌트.
  - position="static": 스크롤 시 고정되지 않고, 자연스럽게 위에 위치. 
    a. "static"은 부모 컨테이너 흐름에 맞게 배치되는 방식.
    b. Outlet(React Router)으로 레이아웃 구분하면 사실 없어도 됩니다.
    c. AppBar의 position 기본값은 "fixed". → 항상 화면 상단에 고정됨.
2. Toolbar
  - 내부를 정렬하는 용도.
  - AppBar 안에서는 규격 맞추려고 Toolbar 쓰는 게 정석.
  - 세부 배치(좌우 정렬, flex 등)는 Box로 감싸서 조절.
3. 이미지 컴포넌트는 따로 없다.
4. 제네릭을 명시해야 할 때.
  - 초기값이 null/undefined일 때
    ex) const [data, setData] = useState<User | null>(null);
  - 빈 배열/객체로 시작할 때
    ex) const [list, setList] = useState<Item[]>([]);
  - 의도된 리터럴 유니온을 쓸 때
    ex) const [status, setStatus] = useState<'idle'|'loading'|'done'>('idle');
 */
