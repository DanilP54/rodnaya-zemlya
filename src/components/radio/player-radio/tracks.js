import track from '../../../../public/podcasts/podcast.mp3'
export const tracks = [
  {
    id: 1,
    title: 'Дэймон, навсегда!',
    artist: '15 ноября 2024 г.',
    description: 'Музыкальный мир Дэймона Албарна и его влияние на мир',
    duration: 36,
    color: '#3CB371',
    trackSrc: track,
    image: '/placeholder.svg?height=40&width=40',
    playlist: [ // Обновлено поле playlist
      { title: 'Feel Good Inc.', artist: 'Gorillaz' },
      { title: 'Clint Eastwood', artist: 'Gorillaz' },
      { title: 'On Melancholy Hill', artist: 'Gorillaz' },
      { title: 'Dare', artist: 'Gorillaz' },
      { title: 'Stylo', artist: 'Gorillaz' },
    ]
  },
  {
    id: 2,
    title: 'Love Supreme (ft. Jahan)',
    artist: '20 июля 2024 г.',
    description: 'Другое описание подкаста...',
    duration: 45,
    color: 'blue',
    trackSrc: track,
    image: '/placeholder.svg?height=40&width=40',
    playlist: [ // Обновлено поле playlist
      { title: 'Love Supreme', artist: 'John Coltrane' },
      { title: 'Take Five', artist: 'Dave Brubeck' },
      { title: 'So What', artist: 'Miles Davis' },
      { title: 'Strange Fruit', artist: 'Billie Holiday' },
      { title: 'A Love Supreme', artist: 'John Coltrane' },
    ]
  },
  {
    id: 3,
    title: 'DADADOO from Arbutus Cany',
    artist: '2 июня 2024 г.',
    description: 'Еще одно описание подкаста...',
    duration: 15,
    color: 'green',
    trackSrc: track,
    image: '/placeholder.svg?height=40&width=40',
    playlist: [ // Обновлено поле playlist
      { title: 'Electric Feel', artist: 'MGMT' },
      { title: 'Young Folks', artist: 'Peter Bjorn and John' },
      { title: 'Pumped Up Kicks', artist: 'Foster the People' },
      { title: '1901', artist: 'Phoenix' },
      { title: 'Somebody That I Used to Know', artist: 'Gotye' },
    ]
  },
  {
    id: 4,
    title: 'Chill Beats for Studying',
    artist: '12 мая 2024 г.',
    description: 'Расслабляющие биты для учебы и концентрации...',
    duration: 20,
    color: 'red',
    trackSrc: track,
    image: '/placeholder.svg?height=40&width=40',
    playlist: [ // Обновлено поле playlist
      { title: 'Weightless', artist: 'Marconi Union' },
      { title: 'Cold Little Heart', artist: 'Michael Kiwanuka' },
      { title: 'River', artist: 'Leon Bridges' },
      { title: 'Sunset Lover', artist: 'Petit Biscuit' },
      { title: 'Night Owl', artist: 'Galimatias' },
    ]
  },
  {
    id: 5,
    title: 'Jazz Classics Reimagined',
    artist: '22 апреля 2024 г.',
    description: 'Современные интерпретации джазовой классики...',
    duration: 50,
    color: 'purple',
    trackSrc: track,
    image: '/placeholder.svg?height=40&width=40',
    playlist: [ // Обновлено поле playlist
      { title: 'Take Five', artist: 'Dave Brubeck' },
      { title: 'Feeling Good', artist: 'Nina Simone' },
      { title: 'My Favorite Things', artist: 'John Coltrane' },
      { title: 'Cantaloupe Island', artist: 'Herbie Hancock' },
      { title: 'Ain\'t Misbehavin\'', artist: 'Fats Waller' },
    ]
  },
  {
    id: 6,
    title: 'Electronic Fusion Experiment',
    artist: '18 апреля 2024 г.',
    description: 'Экспериментальное слияние электронных жанров...',
    duration: 23,
    color: 'orange',
    trackSrc: track,
    image: '/placeholder.svg?height=40&width=40',
    playlist: [ // Обновлено поле playlist
      { title: 'Strobe', artist: 'Deadmau5' },
      { title: 'Titanium', artist: 'David Guetta ft. Sia' },
      { title: 'Wake Me Up', artist: 'Avicii' },
      { title: 'Animals', artist: 'Martin Garrix' },
      { title: 'Lean On', artist: 'Major Lazer' },
    ]
  },
  {
    id: 7,
    title: 'Acoustic Covers of 80s Hits',
    artist: '29 март 2024 г.',
    description: 'Акустические версии популярных хитов 80-х...',
    duration: 23,
    color: 'pink',
    trackSrc: track,
    image: '/placeholder.svg?height=40&width=40',
    playlist: [ // Обновлено поле playlist
      { title: 'Every Breath You Take', artist: 'The Police' },
      { title: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses' },
      { title: 'Time After Time', artist: 'Cyndi Lauper' },
      { title: 'Take On Me', artist: 'a-ha' },
      { title: 'Billie Jean', artist: 'Michael Jackson' },
    ]
  },
  {
    id: 8,
    title: 'Meditation Soundscapes',
    artist: '2 августа 2024 г.',
    description: 'Звуковые пейзажи для медитации и релаксации...',
    duration: 23,
    color: 'teal',
    trackSrc: track,
    image: '/placeholder.svg?height=40&width=40',
    playlist: [ // Обновлено поле playlist
      { title: 'Weightless', artist: 'Marconi Union' },
      { title: 'Meditation', artist: 'Moby' },
      { title: 'Ambient 1: Music for Airports', artist: 'Brian Eno' },
      { title: 'Breathe', artist: 'Pink Floyd' },
      { title: 'Aqueous Transmission', artist: 'Incubus' },
    ]
  },
]