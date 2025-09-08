import { Container, Box, Stack } from '@mui/material'

function App() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <Container sx={{ backgroundColor: 'green' }}>
        <Box sx={{ bgcolor: 'red', height: 50 }} />
      </Container>
      <Container sx={{ backgroundColor: 'yellow' }}>
        <Box sx={{ bgcolor: 'red', height: 50 }} />
      </Container>
      <Container sx={{ backgroundColor: 'blue' }}>
        <Box sx={{ bgcolor: 'red', height: 50 }} />
      </Container>
      <Stack
        direction='row'
        spacing={9}
        sx={{ border: 'solid' }}>
        <Box>Box 1</Box>
        <Box>Box 2</Box>
        <Box>Box 3</Box>
      </Stack>
    </Container>
  )
}

export default App
