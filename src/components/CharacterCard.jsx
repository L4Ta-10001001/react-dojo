import { Card, CardActionArea, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const statusColors = {
  Alive: 'success',
  Dead: 'error',
  unknown: 'default',
}

function CharacterCard({ character }) {
  const navigate = useNavigate()

  return (
    <Card elevation={4}>
      <CardActionArea onClick={() => navigate(`/catalogo/${character.id}`)}>
        <CardMedia component="img" height="240" image={character.image} alt={character.name} />
        <CardContent>
          <Stack spacing={1}>
            <Typography variant="h6" component="h3" noWrap>
              {character.name}
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
              <Chip
                color={statusColors[character.status] || 'default'}
                label={character.status}
                size="small"
              />
              <Typography variant="body2" color="text.secondary">
                {character.species}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CharacterCard
