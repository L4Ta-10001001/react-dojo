import { TextField } from '@mui/material'

function SearchBar({ value, onChange }) {
  return (
    <TextField
      label="Buscar personaje"
      placeholder="Escribe un nombre..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
      fullWidth
      size="medium"
    />
  )
}

export default SearchBar
