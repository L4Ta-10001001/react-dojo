import { Avatar, Card, Chip, Divider, Stack, Typography } from '@mui/material'

const statusColors = {
  Alive: 'success',
  Dead: 'error',
  unknown: 'default',
}

function CharacterDetail({ character }) {
  return (
    <Card elevation={6} sx={{ p: { xs: 2, md: 3 } }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems={{ xs: 'center', md: 'stretch' }}>
        <Avatar
          src={character.image}
          alt={character.name}
          variant="rounded"
          sx={{ width: { xs: 220, md: 280 }, height: { xs: 220, md: 280 } }}
        />
        <Stack spacing={1.2} justifyContent="center" sx={{ width: '100%' }}>
          <Typography variant="h4" component="h1">
            {character.name}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
            <Chip color={statusColors[character.status] || 'default'} label={character.status} />
            <Typography variant="body1" color="text.secondary">
              {character.species}
            </Typography>
          </Stack>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body1"><strong>Genero:</strong> {character.gender}</Typography>
          <Typography variant="body1"><strong>Origen:</strong> {character.origin?.name}</Typography>
          <Typography variant="body1"><strong>Ubicacion:</strong> {character.location?.name}</Typography>
        </Stack>
      </Stack>
    </Card>
  )
}

export default CharacterDetail
