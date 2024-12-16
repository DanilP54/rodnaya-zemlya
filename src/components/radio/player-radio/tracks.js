import track from '../../../../public/podcasts/pod.mp3'
import track1 from '../../../../public/red-music/1.mp3'
import track2 from '../../../../public/red-music/2.mp3'
import track3 from '../../../../public/red-music/3.mp3'

import image1 from '../../../../public/podcasts/1.jpg'
import image2 from '../../../../public/podcasts/3.webp'
import image3 from '../../../../public/podcasts/5.webp'
import image4 from '../../../../public/podcasts/6.jpg'


import Card1 from '../../../../public/Card1.jpg'
import Card2 from '../../../../public/Card2.jpg'
import Card3 from '../../../../public/Card3.jpg'
import Card4 from '../../../../public/Card4.jpg'
import Card6 from '../../../../public/Card6.jpg'
import Card8 from '../../../../public/Card8.jpg'
import Card9 from '../../../../public/Card9.jpg'
import Card10 from '../../../../public/Card10.jpg'
import Card11 from '../../../../public/Card11.jpg'
import Card12 from '../../../../public/Card15.jpg'
import Card13 from '../../../../public/Card20.jpg'
import Card14 from '../../../../public/Card21.jpg'
import Card15 from '../../../../public/Card22.jpg'
import Card16 from '../../../../public/Card23.jpg'
import Card17 from '../../../../public/Card24.jpg'



export const tracks = [
  {
    id: 200,
    title: 'Дэймон, навсегда!',
    artist: '15 ноября 2024 г.',
    description: 'Музыкальный мир Дэймона Албарна и его влияние на мир',
    duration: 36,
    image: image1,
    color: '#3CB371',
    trackSrc: track,
    playlist: [ // Обновлено поле playlist
      { title: 'Feel Good Inc.', artist: 'Gorillaz', image: Card1 },
      { title: 'Clint Eastwood', artist: 'Gorillaz', image: Card2 },
      { title: 'On Melancholy Hill', artist: 'Gorillaz', image: Card3 },
      { title: 'Dare', artist: 'Gorillaz', image: Card4 },
      { title: 'Stylo', artist: 'Gorillaz', image: Card4 },
    ]
  },
  {
    id: 201,
    title: 'Love Supreme (ft. Jahan)',
    artist: '20 июля 2024 г.',
    description: 'Другое описание подкаста...',
    duration: 45,
    image: image2,
    color: 'blue',
    trackSrc: track1,

    playlist: [ // Обновлено поле playlist
      { title: 'Love Supreme', artist: 'John Coltrane', image: Card6 },
      { title: 'Take Five', artist: 'Dave Brubeck', image: Card10 },
      { title: 'So What', artist: 'Miles Davis', image: Card8 },
      { title: 'Strange Fruit', artist: 'Billie Holiday', image: Card9 },
      { title: 'A Love Supreme', artist: 'John Coltrane', image: Card10 },
    ]
  },
  {
    id: 202,
    title: 'DADADOO from Arbutus Cany',
    artist: '2 июня 2024 г.',
    description: 'Еще одно описание подкаста...',
    duration: 15,
    image: image3,
    color: 'green',
    trackSrc: track2,
    playlist: [ // Обновлено поле playlist
      { title: 'Electric Feel', artist: 'MGMT', image: Card11 },
      { title: 'Young Folks', artist: 'Peter Bjorn and John', image: Card12 },
      { title: 'Pumped Up Kicks', artist: 'Foster the People', image: Card13 },
      { title: '1901', artist: 'Phoenix', image: Card14 },
      { title: 'Somebody That', artist: 'Gotye', image: Card15 },
    ]
  },
  {
    id: 203,
    title: 'Chill Beats for Studying',
    artist: '12 мая 2024 г.',
    description: 'Расслабляющие биты для учебы и концентрации...',
    duration: 20,
    color: 'red',
    image: image4,
    trackSrc: track3,
    playlist: [ // Обновлено поле playlist
      { title: 'Weightless', artist: 'Marconi Union', image: Card16 },
      { title: 'Cold Little Heart', artist: 'Michael Kiwanuka', image: Card17 },
      { title: 'River', artist: 'Leon Bridges', image: Card12 },
      { title: 'Sunset Lover', artist: 'Petit Biscuit', image: Card11 },
      { title: 'Night Owl', artist: 'Galimatias', image: Card4 },
    ]
  },
  // {
  //   id: 5,
  //   title: 'Jazz Classics Reimagined',
  //   artist: '22 апреля 2024 г.',
  //   description: 'Современные интерпретации джазовой классики...',
  //   duration: 50,
  //   color: 'purple',
  //   trackSrc: '',
  //   image: '/placeholder.svg?height=40&width=40',
  //   playlist: [ // Обновлено поле playlist
  //     { title: 'Take Five', artist: 'Dave Brubeck' },
  //     { title: 'Feeling Good', artist: 'Nina Simone' },
  //     { title: 'My Favorite Things', artist: 'John Coltrane' },
  //     { title: 'Cantaloupe Island', artist: 'Herbie Hancock' },
  //     { title: 'Ain\'t Misbehavin\'', artist: 'Fats Waller' },
  //   ]
  // },
  // {
  //   id: 6,
  //   title: 'Electronic Fusion Experiment',
  //   artist: '18 апреля 2024 г.',
  //   description: 'Экспериментальное слияние электронных жанров...',
  //   duration: 23,
  //   color: 'orange',
  //   trackSrc: track,
  //   image: '/placeholder.svg?height=40&width=40',
  //   playlist: [ // Обновлено поле playlist
  //     { title: 'Strobe', artist: 'Deadmau5' },
  //     { title: 'Titanium', artist: 'David Guetta ft. Sia' },
  //     { title: 'Wake Me Up', artist: 'Avicii' },
  //     { title: 'Animals', artist: 'Martin Garrix' },
  //     { title: 'Lean On', artist: 'Major Lazer' },
  //   ]
  // },
  // {
  //   id: 7,
  //   title: 'Acoustic Covers of 80s Hits',
  //   artist: '29 март 2024 г.',
  //   description: 'Акустические версии популярных хитов 80-х...',
  //   duration: 23,
  //   color: 'pink',
  //   trackSrc: track,
  //   image: '/placeholder.svg?height=40&width=40',
  //   playlist: [ // Обновлено поле playlist
  //     { title: 'Every Breath You Take', artist: 'The Police' },
  //     { title: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses' },
  //     { title: 'Time After Time', artist: 'Cyndi Lauper' },
  //     { title: 'Take On Me', artist: 'a-ha' },
  //     { title: 'Billie Jean', artist: 'Michael Jackson' },
  //   ]
  // },
  // {
  //   id: 8,
  //   title: 'Meditation Soundscapes',
  //   artist: '2 августа 2024 г.',
  //   description: 'Звуковые пейзажи для медитации и релаксации...',
  //   duration: 23,
  //   color: 'teal',
  //   trackSrc: track,
  //   image: '/placeholder.svg?height=40&width=40',
  //   playlist: [ // Обновлено поле playlist
  //     { title: 'Weightless', artist: 'Marconi Union' },
  //     { title: 'Meditation', artist: 'Moby' },
  //     { title: 'Ambient 1: Music for Airports', artist: 'Brian Eno' },
  //     { title: 'Breathe', artist: 'Pink Floyd' },
  //     { title: 'Aqueous Transmission', artist: 'Incubus' },
  //   ]
  // },
]