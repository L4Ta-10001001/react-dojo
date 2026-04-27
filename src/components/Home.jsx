import { Button, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <Stack spacing={3} alignItems="center" className="home">
      <Typography variant="h3" component="h1" textAlign="center">
        React Dojo
      </Typography>
      <Typography variant="body1" color="text.secondary" textAlign="center">
        Selecciona una experiencia:
      </Typography>
      <Stack spacing={1.5} width="100%" maxWidth={440}>
        <Button variant="contained" size="large" onClick={() => navigate('/simple')}>
          Calculadora Simple
        </Button>
      </Stack>
    </Stack>
  )
}

export default Home
