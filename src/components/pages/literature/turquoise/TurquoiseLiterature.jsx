import { TurquoiseFiltersLiterature } from "../../../widgets/turquoise/TurquoiseFiltersLiterature.jsx";
import { LiteratureCardList } from "../../../widgets/cards/literature/LiteratureCardList.jsx";

const booksList = [
    {
        "id": 1,
        "title": "1984 by George Orwell",
        "src": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fDE5ODR8ZW58MHx8fHwxNjMyNjY2NjQ1&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "dystopian",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 2,
        "title": "To Kill a Mockingbird by Harper Lee",
        "src": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRvJTIwS2lsbCUyMEEmYW1wO2NvbG9yPTI1NXwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "classic",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 3,
        "title": "The Great Gatsby by F. Scott Fitzgerald",
        "src": "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMEdyZWVrJTIwR2F0c3lidXxlbnwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "classic",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 4,
        "title": "Pride and Prejudice by Jane Austen",
        "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFByaWVkJTIwYW5kJTIwUHJlZWRpbmd8ZW58MHx8fHwxNjMyNjY2NjQ1&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "romance",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 5,
        "title": "The Catcher in the Rye by J.D. Salinger",
        "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMENhdGNoZXIlMjBpbiUyMHRoZSUyMFJ5ZXxlbnwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "coming-of-age",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 6,
        "title": "Moby-Dick by Herman Melville",
        "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fE1vYnlEaWNrfGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "adventure",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 7,
        "title": "War and Peace by Leo Tolstoy",
        "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFdhciUyMGFuZCUyMFBlYWNlfGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "historical",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 8,
        "title": "The Hobbit by J.R.R. Tolkien",
        "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMEhvYmJpdHxlbnwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "fantasy",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 9,
        "title": "Brave New World by Aldous Huxley",
        "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fEJyZWF2ZSUyME5ldyUyMEhvbWV8ZW58MHx8fHwxNjMyNjY2NjQ1&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "dystopian",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 10,
        "title": "The Lord of the Rings by J.R.R. Tolkien",
        "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMExvcmQlMjBvZiUyMHRoZSUyMFJpZ2h0c3xlbnwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "fantasy",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 11,
        "title": "Crime and Punishment by Fyodor Dostoevsky",
        "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fENyaW1lJTIwYW5kJTIwUHVucnl8ZW58MHx8fHwxNjMyNjY2NjQ1&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "psychological",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 12,
        "title": "The Odyssey by Homer",
        "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyME9keWRpYXxlbnwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "epic",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 13,
        "title": "One Hundred Years of Solitude by Gabriel García Márquez",
        "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fE9uZSUyMDAwJTIwWWVhcnMlMjBvZiUyMFNvbHV0aW9ufGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "magical-realism",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 14,
        "title": "The Alchemist by Paulo Coelho",
        "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMEFsY2hlbWlzdHxlbnwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "philosophical",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 15,
        "title": "The Picture of Dorian Gray by Oscar Wilde",
        "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMFBpY3R1cmUlMjBvZiUyMERvcmlhbiUyR3JheXxlbnwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "gothic",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 16,
        "title": "The Road by Cormac McCarthy",
        "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMFJvYWQlMjBieSUyMENvcm1hYyUyTWNjaHJpc3RvcHxlbnwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "post-apocalyptic",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 17,
        "title": "The Handmaid's Tale by Margaret Atwood",
        "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMEhhbmRtaWd0JTIwVGFsaXxlbnwwfHx8fDE2MzI2NjY2NDU&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "dystopian",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 18,
        "title": "The Shining by Stephen King",
        "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMFNoaW5pbmd8ZW58MHx8fHwxNjMyNjY2NjQ1&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "horror",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 19,
        "title": "The Hunger Games by Suzanne Collins",
        "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMEh1bmdlciUyMEdhbWVzfGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "dystopian",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 20,
        "title": "The Da Vinci Code by Dan Brown",
        "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMERhJTIwVmljZSUyMENvZGV8ZW58MHx8fHwxNjMyNjY2NjQ1&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "mystery",
        isPlay: false,
        category: 'turquoise'
    },
    {
        "id": 21,
        "title": "The Girl with the Dragon Tattoo by Stieg Larsson",
        "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fFRoZSUyMEdpcmUlMjB3aXRoJTIwdGhlJTIwRHJvbmUlMjBUd2lufGVufDB8fHx8MTYzMjY2NjY0NQ&ixlib=rb-1.2.1&q=80&w=400",
        "genre": "thriller",
        isPlay: false,
        category: 'turquoise'
    }
]


export default function TurquoiseLiterature() {
    return (
        <>
            <TurquoiseFiltersLiterature />
            <LiteratureCardList list={booksList} />

        </>
    )
}