import track from '../../../../public/podcasts/pod.mp3'
import track1 from '../../../../public/red-music/1.mp3'
import track2 from '../../../../public/red-music/2.mp3'
import track3 from '../../../../public/red-music/3.mp3'

import image1 from '../../../../public/podcasts/1.jpg'
import image2 from '../../../../public/podcasts/3.webp'
import image3 from '../../../../public/podcasts/5.webp'
import image4 from '../../../../public/podcasts/6.jpg'



import track4 from '../../../../public/red-music/4.mp3'
import track5 from '../../../../public/red-music/5.mp3'
import track6 from '../../../../public/red-music/6.mp3'
import track7 from '../../../../public/red-music/7.mp3'


import track8 from '../../../../public/turqu-music/1.mp3'
import track9 from '../../../../public/turqu-music/2.mp3'
import track10 from '../../../../public/turqu-music/3.mp3'
import track11 from '../../../../public/turqu-music/4.mp3'
import track12 from '../../../../public/turqu-music/5.mp3'
import track13 from '../../../../public/turqu-music/6.mp3'
import track14 from '../../../../public/turqu-music/7.mp3'
import track15 from '../../../../public/turqu-music/8.mp3'

import track16 from '../../../../public/green-music/1.mp3'
import track17 from '../../../../public/green-music/2.mp3'
import track18 from '../../../../public/green-music/3.mp3'
import track19 from '../../../../public/green-music/4.mp3'
import track20 from '../../../../public/green-music/5.mp3'
import track21 from '../../../../public/green-music/6.mp3'
import track22 from '../../../../public/green-music/7.mp3'





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
      { id: 300, title: 'Feel Good Inc.', artist: 'Gorillaz', image: Card1, trackSrc: track4 },
      { id: 301, title: 'Clint Eastwood', artist: 'Gorillaz', image: Card2, trackSrc: track5 },
      { id: 302, title: 'On Melancholy Hill', artist: 'Gorillaz', image: Card3, trackSrc: track6 },
      { id: 303, title: 'Dare', artist: 'Gorillaz', image: Card4, trackSrc: track7 },
      { id: 304, title: 'Stylo', artist: 'Gorillaz', image: Card4, trackSrc: track8 },
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
      { id: 305, title: 'Love Supreme', artist: 'John Coltrane', image: Card6, trackSrc: track9 },
      { id: 306, title: 'Take Five', artist: 'Dave Brubeck', image: Card10, trackSrc: track10 },
      { id: 307, title: 'So What', artist: 'Miles Davis', image: Card8, trackSrc: track11 },
      { id: 308, title: 'Strange Fruit', artist: 'Billie Holiday', image: Card9, trackSrc: track12 },
      { id: 309, title: 'A Love Supreme', artist: 'John Coltrane', image: Card10, trackSrc: track13 },
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
      { id: 310, title: 'Electric Feel', artist: 'MGMT', image: Card11, trackSrc: track14 },
      { id: 311, title: 'Young Folks', artist: 'Peter Bjorn and John', image: Card12, trackSrc: track15 },
      { id: 312, title: 'Pumped Up Kicks', artist: 'Foster the People', image: Card13, trackSrc: track16 },
      { id: 313, title: '1901', artist: 'Phoenix', image: Card14, trackSrc: track17 },
      { id: 314, title: 'Somebody That', artist: 'Gotye', image: Card15, trackSrc: track18 },
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
      { id: 315, title: 'Weightless', artist: 'Marconi Union', image: Card16, trackSrc: track19 },
      { id: 316, title: 'Cold Little Heart', artist: 'Michael Kiwanuka', image: Card17, trackSrc: track20 },
      { id: 317, title: 'River', artist: 'Leon Bridges', image: Card12, trackSrc: track21 },
      { id: 318, title: 'Sunset Lover', artist: 'Petit Biscuit', image: Card11, trackSrc: track22 },
      { id: 319, title: 'Night Owl', artist: 'Galimatias', image: Card4, trackSrc: track19 },
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