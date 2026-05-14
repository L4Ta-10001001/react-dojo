import { useEffect, useState } from 'react'
import { Alert, Button, CircularProgress, Stack, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import CharacterDetail from '../components/CharacterDetail'

function CharacterDetailPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function fetchCharacterById() {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        if (!response.ok) {
          throw new Error('No se encontro el personaje solicitado.')
        }

        const data = await response.json()
        if (isMounted) {
          setCharacter(data)
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

    if (!id) {
      setError('ID de personaje no valido.')
      setLoading(false)
      return () => {
        isMounted = false
      }
    }

    fetchCharacterById()

    return () => {
      isMounted = false
    }
  }, [id])

  return (
    <Stack spacing={3}>
      <Button variant="text" onClick={() => navigate('/catalogo')} sx={{ alignSelf: 'flex-start', px: 0 }}>
        {'<- Volver al catalogo'}
      </Button>

      {loading && (
        <Stack direction="row" spacing={1.5} alignItems="center">
          <CircularProgress size={24} />
          <Typography>Decodificando sujeto...</Typography>
        </Stack>
      )}

      {!loading && error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && character && <CharacterDetail character={character} />}
    </Stack>
  )
}

export default CharacterDetailPage
