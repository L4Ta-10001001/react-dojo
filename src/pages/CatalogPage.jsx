import { useEffect, useMemo, useState } from 'react'
import { Alert, Box, Button, CircularProgress, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import CharacterCard from '../components/CharacterCard'

function CatalogPage() {
  const navigate = useNavigate()
  const [characters, setCharacters] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function fetchCharacters() {
      setLoading(true)
      setError('')

      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        if (!response.ok) {
          throw new Error('No fue posible cargar el catalogo interdimensional.')
        }

        const data = await response.json()
        if (isMounted) {
          setCharacters(data.results || [])
        }
      } catch (requestError) {
        if (isMounted) {
          setError(requestError.message)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchCharacters()

    return () => {
      isMounted = false
    }
  }, [])

  const filteredCharacters = useMemo(() => {
    const normalizedTerm = searchTerm.trim().toLowerCase()

    if (!normalizedTerm) {
      return characters
    }

    return characters.filter((character) => character.name.toLowerCase().includes(normalizedTerm))
  }, [characters, searchTerm])

  const statusSummary = useMemo(() => {
    return filteredCharacters.reduce(
      (acc, character) => {
        const key = character.status || 'unknown'
        acc[key] = (acc[key] || 0) + 1
        return acc
      },
      { Alive: 0, Dead: 0, unknown: 0 },
    )
  }, [filteredCharacters])

  const exactMatch = useMemo(() => {
    const normalizedTerm = searchTerm.trim().toLowerCase()

    if (!normalizedTerm) {
      return null
    }

    return filteredCharacters.find((character) => character.name.toLowerCase() === normalizedTerm) || null
  }, [filteredCharacters, searchTerm])

  return (
    <Stack spacing={3}>
      <Button variant="text" onClick={() => navigate('/')} sx={{ alignSelf: 'flex-start', px: 0 }}>
        {'<- Volver al inicio'}
      </Button>

      <Typography variant="h4" component="h1">
        Catalogo de Personajes
      </Typography>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {exactMatch && (
        <Alert severity="success">Coincidencia exacta detectada: {exactMatch.name}</Alert>
      )}

      <Typography variant="body2" color="text.secondary">
        Vivos: {statusSummary.Alive} | Muertos: {statusSummary.Dead} | Desconocidos: {statusSummary.unknown}
      </Typography>

      {loading && (
        <Stack direction="row" spacing={1.5} alignItems="center">
          <CircularProgress size={24} />
          <Typography>Cargando datos del portal...</Typography>
        </Stack>
      )}

      {!loading && error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && filteredCharacters.length === 0 && (
        <Alert severity="info">No se encontraron coincidencias en esta dimension.</Alert>
      )}

      {!loading && !error && filteredCharacters.length > 0 && (
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              md: 'repeat(3, minmax(0, 1fr))',
              lg: 'repeat(4, minmax(0, 1fr))',
            },
          }}
        >
          {filteredCharacters.map((character) => (
            <Box key={character.id}>
              <CharacterCard character={character} />
            </Box>
          ))}
        </Box>
      )}
    </Stack>
  )
}

export default CatalogPage
