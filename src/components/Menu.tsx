import { VolumeDown, VolumeUp } from '@mui/icons-material'
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Stack,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import Button from '@mui/material/Button'
import { useState } from 'react'

export function Menu ({ setHungry }: any) {
  const [animals, setAnimals] = useState([
    {
      id: 1,
      image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
      name: 'Lizard',
      description:
        'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      alt: 'green iguana'
    },
    {
      id: 2,
      image:
        'https://phantom-marca.unidadeditorial.es/10cbecf67be245d8ab7871a210863024/resize/1320/f/jpg/assets/multimedia/imagenes/2022/08/15/16605997017349.jpg',
      name: 'Alligator',
      description:
        "It's a freakin alligator... stay away from it if you want to live.",
      alt: 'ali gator'
    },
    {
      id: 3,
      image:
        'https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg',
      name: 'Frog',
      description: 'F.R.O.G.',
      alt: 'Frog...'
    }
  ])

  return (
    <menu className='menu'>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Age</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label='Age'
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label-2'>Name</InputLabel>
        <Select
          onChange={event => {
            console.log(event.target.value)
          }}
          labelId='demo-simple-select-label-2'
          id='demo-simple-select-2'
          label='Name'
        >
          <MenuItem value='Nicolas'>Nicolas</MenuItem>
          <MenuItem value='Ed'>Ed</MenuItem>
          <MenuItem value='Elona'>Elona</MenuItem>
        </Select>
      </FormControl>

      <Stack spacing={3} direction='row' sx={{ mb: 1 }} alignItems='center'>
        <VolumeDown />
        <Slider aria-label='Volume' />
        <VolumeUp />
      </Stack>

      <Button
        size='large'
        variant='contained'
        onClick={() => {
          setHungry(false)
        }}
      >
        EAT
      </Button>
      <Button
        size='small'
        variant='outlined'
        onClick={() => {
          setHungry(true)
        }}
      >
        WORK OUT
      </Button>

      <div className='animal-list'>
        {animals.map(animal => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component='img'
              height='140'
              image={animal.image}
              alt={animal.alt}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {animal.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {animal.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Share</Button>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </menu>
  )
}
