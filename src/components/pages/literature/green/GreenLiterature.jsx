import { useState, useEffect, lazy, Suspense } from "react";
const LiteratureCardList = lazy(() => import("../../../widgets/cards/literature/LiteratureCardList.jsx"));
import { GreenFiltersLiterature } from "../../../widgets/green/GreenFiltersLiterature.jsx";
import { Loading } from "../../../../main.jsx";

const greenBooks = [
  {
    "id": 1,
    "title": "George Orwell", // имя автора на английском
    "nameRu": "1984", // название книги на русском
    "src": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fDE5ODR8ZW58MHx8fHwxNjMyNjY2NjQ1&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Dystopian",
    isPlay: false,
    category: 'green',
    comer: true // назначено true
  },
  {
    "id": 2,
    "title": "Harper Lee", // имя автора на русском
    "nameRu": "Убить пересмешника", // название книги на русском
    "src": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRvJTIwS2lsbCUyMEEmYW1wO2NvbG9yPTI1NXwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Classic",
    isPlay: false,
    category: 'green',
    comer: false // назначено false
  },
  {
    "id": 3,
    "title": "F. Scott Fitzgerald", // имя автора на английском
    "nameRu": "Великий Гэтсби", // название книги на русском
    "src": "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMEdyZWVrJTIwR2F0c3lidXxlbnwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Classic",
    isPlay: false,
    category: 'green',
    comer: true // назначено true
  },
  {
    "id": 4,
    "title": "Jane Austen", // имя автора на русском
    "nameRu": "Гордость и предубеждение", // название книги на русском
    "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFByaWVkJTIwYW5kJTIwUHJlZWRpbmd8ZW58MHx8fHwxNjMyNjY2NjQ1&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Romance",
    isPlay: false,
    category: 'green',
    comer: false // назначено false
  },
  {
    "id": 5,
    "title": "J.D. Salinger", // имя автора на английском
    "nameRu": "Над пропастью во ржи", // название книги на русском
    "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMENhdGNoZXIlMjBpbiUyMHRoZSUyMFJ5ZXxlbnwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Coming of age",
    isPlay: false,
    category: 'green',
    comer: true // назначено true
  },
  {
    "id": 6,
    "title": "Herman Melville", // имя автора на английском
    "nameRu": "Тень горы", // название книги на русском
    "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fE1vYnlEaWNrfGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Adventure",
    isPlay: false,
    category: 'green',
    comer: false // назначено false
  },
  {
    "id": 7,
    "title": "Лев Толстой", // имя автора на русском
    "nameRu": "Война и мир", // название книги на русском
    "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFdhciUyMGFuZCUyMFBlYWNlfGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Historical",
    isPlay: false,
    category: 'green',
    comer: true // назначено true
  },
  {
    "id": 8,
    "title": "J.R.R. Tolkien", // имя автора на английском
    "nameRu": "Хоббит", // название книги на русском
    "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMEhvYmJpdHxlbnwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Fantasy",
    isPlay: false,
    category: 'green',
    comer: false // назначено false
  },
  {
    "id": 9,
    "title": "Aldous Huxley", // имя автора на английском
    "nameRu": "О дивный новый мир", // название книги на русском
    "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fEJyZWF2ZSUyME5ldyUyMEhvbWV8ZW58MHx8fHwxNjMyNjY2NjQ1&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Dystopian",
    isPlay: false,
    category: 'green',
    comer: true // назначено true
  },
  {
    "id": 10,
    "title": "J.R.R. Tolkien", // имя автора на английском
    "nameRu": "Властелин колец", // название книги на русском
    "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMExvcmQlMjBvZiUyMHRoZSUyMFJpZ2h0c3xlbnwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Fantasy",
    isPlay: false,
    category: 'green',
    comer: false // назначено false
  },
  {
    "id": 11,
    "title": "Фёдор Достоевский", // имя автора на русском
    "nameRu": "Преступление и наказание", // название книги на русском
    "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fENyaW1lJTIwYW5kJTIwUHVucnl8ZW58MHx8fHwxNjMyNjY2NjQ1&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Psychological",
    isPlay: false,
    category: 'green',
    comer: true // назначено true
  },
  {
    "id": 12,
    "title": "Homer", // имя автора на английском
    "nameRu": "Одиссея", // название книги на русском
    "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyME9keWRpYXxlbnwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Epic",
    isPlay: false,
    category: 'green',
    comer: false // назначено false
  },
  {
    "id": 13,
    "title": "Gabriel García Márquez", // имя автора на английском
    "nameRu": "Сто лет одиночества", // название книги на русском
    "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fE9uZSUyMDAwJTIwWWVhcnMlMjBvZiUyMFNvbHV0aW9ufGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Magical Realism",
    isPlay: false,
    category: 'green',
    comer: true // назначено true
  },
  {
    "id": 14,
    "title": "Paulo Coelho", // имя автора на английском
    "nameRu": "Алхимик", // название книги на русском
    "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMEFsY2hlbWlzdHxlbnwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Philosophical",
    isPlay: false,
    category: 'green',
    comer: false // назначено false
  },
  {
    "id": 15,
    "title": "Oscar Wilde", // имя автора на английском
    "nameRu": "Портрет Дориана Грея", // название книги на русском
    "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMFBpY3R1cmUlMjBvZiUyMERvcmlhbiUyR3JheXxlbnwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Gothic",
    isPlay: false,
    category: 'green',
    comer: true // назначено true
  },
  {
    "id": 16,
    "title": "Cormac McCarthy", // имя автора на английском
    "nameRu": "Дорога", // название книги на русском
    "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMFJvYWQlMjBieSUyMENvcm1hYyUyTWNjaHJpc3RvcHxlbnwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Post Apocalyptic",
    isPlay: false,
    category: 'green',
    comer: false // назначено false
  },
  {
    "id": 17,
    "title": "Margaret Atwood", // имя автора на английском
    "nameRu": "Сказание служанки", // название книги на русском
    "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMEhhbmRtaWd0JTIwVGFsaXxlbnwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Dystopian",
    isPlay: false,
    category: 'green',
    comer: true // назначено true
  },
  {
    "id": 18,
    "title": "Stephen King", // имя автора на английском
    "nameRu": "Сияние", // название книги на русском
    "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMFNoaW5pbmd8ZW58MHx8fHwxNjMyNjY2NjQ1&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Horror",
    isPlay: false,
    category: 'green',
    comer: false // назначено false
  },
  {
    "id": 19,
    "title": "Suzanne Collins", // имя автора на английском
    "nameRu": "Голодные игры", // название книги на русском
    "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMEh1bmdlciUyMEdhbWVzfGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Dystopian",
    isPlay: false,
    category: 'green',
    comer: true // назначено true
  },
  {
    "id": 20,
    "title": "Dan Brown", // имя автора на английском
    "nameRu": "Код да Винчи", // название книги на русском
    "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMERhJTIwVmljZSUyMENvZGV8ZW58MHx8fHwxNjMyNjY2NjQ1&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Mystery",
    isPlay: false,
    category: 'green',
    comer: false // назначено false
  },
  {
    "id": 21,
    "title": "Stieg Larsson", // имя автора на английском
    "nameRu": "Девушка с татуировкой дракона", // название книги на русском
    "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMEdpcmUlMjB3aXRoJTIwdGhlJTIwRHJvbmUlMjBUd2lufGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400",
    "genre": "Thriller",
    isPlay: false,
    category: 'green',
    comer: true // назначено true
  }
]



export default function GreenLiterature() {
  const [value, setValue] = useState(null)
  const [books, setBooks] = useState(greenBooks || [])


  useEffect(() => {
    if (value === null) return setBooks(greenBooks || [])

    const filtered = greenBooks.filter(item => {
      if (value === 'Коммерческое') return item.comer === true
      if (value === 'Некоммерческое') return item.comer === false
    })
    setBooks(filtered)
  }, [value])

  return (
    <>
      <GreenFiltersLiterature setValue={setValue} value={value} />
      <Suspense fallback={<Loading />}>
        <LiteratureCardList cards={books} setCards={setBooks} />
      </Suspense>

    </>
  )
}
