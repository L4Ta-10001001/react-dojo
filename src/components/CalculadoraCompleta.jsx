import { useState } from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function CalculadoraCompleta() {
  const navigate = useNavigate()
  const [input, setInput] = useState('')

  const agregar = (valor) => {
    setInput(input + valor)
  }

  const calcular = () => {
    try {
      setInput(eval(input).toString())
    } catch {
      setInput('Error')
    }
  }

  const clear = () => setInput('')
  const borrar = () => setInput(input.slice(0, -1))

  return (
    <Stack spacing={2} className="calculadora-completa" maxWidth={640}>
      <Button variant="text" onClick={() => navigate('/')} sx={{ alignSelf: 'flex-start', px: 0 }}>
        {'<- Volver'}
      </Button>
      <Typography variant="h4" component="h2">
        Calculadora Completa
      </Typography>

      <TextField value={input || '0'} InputProps={{ readOnly: true }} fullWidth />

      <div className="calc-row calc-row-2">
        <Button color="error" variant="contained" onClick={clear}>C</Button>
        <Button color="error" variant="contained" onClick={borrar}>DEL</Button>
      </div>

      <div className="calc-row">
        <Button variant="outlined" onClick={() => agregar('7')}>7</Button>
        <Button variant="outlined" onClick={() => agregar('8')}>8</Button>
        <Button variant="outlined" onClick={() => agregar('9')}>9</Button>
        <Button onClick={() => agregar('/')} variant="contained">/</Button>
      </div>

      <div className="calc-row">
        <Button variant="outlined" onClick={() => agregar('4')}>4</Button>
        <Button variant="outlined" onClick={() => agregar('5')}>5</Button>
        <Button variant="outlined" onClick={() => agregar('6')}>6</Button>
        <Button onClick={() => agregar('*')} variant="contained">*</Button>
      </div>

      <div className="calc-row">
        <Button variant="outlined" onClick={() => agregar('1')}>1</Button>
        <Button variant="outlined" onClick={() => agregar('2')}>2</Button>
        <Button variant="outlined" onClick={() => agregar('3')}>3</Button>
        <Button onClick={() => agregar('-')} variant="contained">-</Button>
      </div>

      <div className="calc-row calc-row-2">
        <Button onClick={() => agregar('+')} variant="contained">+</Button>
        <Button onClick={calcular} variant="contained">=</Button>
      </div>

      <div className="calc-row">
        <Button variant="outlined" onClick={() => agregar('0')}>0</Button>
        <Button variant="outlined" onClick={() => agregar('.')}>.</Button>
      </div>
    </Stack>
  )
}

export default CalculadoraCompleta
