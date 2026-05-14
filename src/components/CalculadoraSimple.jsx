import { useState } from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function CalculadoraSimple() {
  const navigate = useNavigate()
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [resultado, setResultado] = useState(null)

  const sumar = () => {
    setResultado(Number(num1) + Number(num2))
  }

  const limpiar = () => {
    setNum1('')
    setNum2('')
    setResultado(null)
  }

  return (
    <Stack spacing={2} maxWidth={480}>
      <Button variant="text" onClick={() => navigate('/')} sx={{ alignSelf: 'flex-start', px: 0 }}>
        {'<- Volver'}
      </Button>
      <Typography variant="h4" component="h2">
        Simple: suma 2 numeros
      </Typography>

      <TextField
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        label="Numero 1"
        type="number"
      />

      <TextField
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        label="Numero 2"
        type="number"
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
        <Button variant="contained" onClick={sumar} fullWidth>
          Sumar
        </Button>
        <Button variant="outlined" onClick={limpiar} fullWidth>
          Limpiar
        </Button>
      </Stack>

      {resultado !== null && (
        <Typography className="resultado" variant="h6">
          Resultado: {resultado}
        </Typography>
      )}
    </Stack>
  )
}

export default CalculadoraSimple
