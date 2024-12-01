import { useLoaderData } from "@remix-run/react"

type Character = {
    id: number
    firstName: string
    lastName: string
    fullName: string
    title: string
    family: string
    image: string
    imageUrl: string
}

const getCharacterList = (): Promise<Character[]> => {
    return fetch('https://thronesapi.com/api/v2/Characters').then(res => res.json())
}

export const loader = async (): Promise<Character[]> => {
    const characters: Character[] = await new Promise((resolve) => {
        resolve([
            {
                "id": 6,
                "firstName": "Ned",
                "lastName": "Stark",
                "fullName": "Ned Stark",
                "title": "Lord of Winterfell",
                "family": "House Stark",
                "image": "ned-stark.jpg",
                "imageUrl": "https://thronesapi.com/assets/images/ned-stark.jpg"
              },
              {
                "id": 7,
                "firstName": "Robert",
                "lastName": "Baratheon",
                "fullName": "Robert Baratheon",
                "title": "Lord of the Seven Kingdoms",
                "family": "House Baratheon",
                "image": "robert-baratheon.jpeg",
                "imageUrl": "https://thronesapi.com/assets/images/robert-baratheon.jpeg"
              },
              {
                "id": 8,
                "firstName": "Jamie",
                "lastName": "Lannister",
                "fullName": "Jamie Lannister",
                "title": "Lord Commander of the Kingsguard",
                "family": "House Lannister",
                "image": "jaime-lannister.jpg",
                "imageUrl": "https://thronesapi.com/assets/images/jaime-lannister.jpg"
              },
              {
                "id": 9,
                "firstName": "Cersei",
                "lastName": "Lannister",
                "fullName": "Cersei Lannister",
                "title": "Lady of Casterly Rock",
                "family": "House Lannister",
                "image": "cersei.jpg",
                "imageUrl": "https://thronesapi.com/assets/images/cersei.jpg"
              },
              {
                "id": 10,
                "firstName": "Cateyln",
                "lastName": "Stark",
                "fullName": "Catelyn Stark",
                "title": "Lady of Winterfell",
                "family": "House Stark",
                "image": "catelyn-stark.jpg",
                "imageUrl": "https://thronesapi.com/assets/images/catelyn-stark.jpg"
              },
              {
                "id": 11,
                "firstName": "Robb",
                "lastName": "Stark",
                "fullName": "Rob Stark",
                "title": "Lord of Winterfell",
                "family": "House Stark",
                "image": "robb-stark.jpg",
                "imageUrl": "https://thronesapi.com/assets/images/robb-stark.jpg"
              },
              {
                "id": 12,
                "firstName": "Theon",
                "lastName": "Greyjoy",
                "fullName": "Theon Greyjoy",
                "title": "Captain of Sea Bitch",
                "family": "House Greyjoy",
                "image": "theon.jpg",
                "imageUrl": "https://thronesapi.com/assets/images/theon.jpg"
              },
              {
                "id": 13,
                "firstName": "Joffrey",
                "lastName": "Baratheon",
                "fullName": "Joffrey Baratheon",
                "title": "Lord of the Seven Kingdoms, Protector of the Realm",
                "family": "House Lanister",
                "image": "joffrey.jpg",
                "imageUrl": "https://thronesapi.com/assets/images/joffrey.jpg"
              },
              {
                "id": 14,
                "firstName": "Tyrion",
                "lastName": "Lannister",
                "fullName": "Tyrion Lannister",
                "title": "Hand of the Queen",
                "family": "House Lanister",
                "image": "tyrion-lannister.jpg",
                "imageUrl": "https://thronesapi.com/assets/images/tyrion-lannister.jpg"
              },
              {
                "id": 15,
                "firstName": "Sandor",
                "lastName": "Clegane",
                "fullName": "The Hound",
                "title": "The Hound",
                "family": "House Clegane",
                "image": "the-hound.jpg",
                "imageUrl": "https://thronesapi.com/assets/images/the-hound.jpg"
              },
        ])
    })

    return characters
}

export default function Characters() {
    const list = useLoaderData<typeof loader>()

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col">
                {list.map((v: Character, i) => (
                    <div key={i} className="flex">
                        <br />
                        <div className="item">{v.firstName}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}