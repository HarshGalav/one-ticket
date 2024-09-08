import { NextResponse } from 'next/server';

const museumData = [
  {
    "id": 1,
    "title": "Government Museum Chennai",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology.",
    "history": "Established in 1851, the Government Museum Chennai is the second oldest museum in India. It houses a rich collection of artifacts, including bronze sculptures, archaeological findings, and paintings.",
    "release_date": "2010-07-16T00:00:00Z",
    "poster": "https://github.com/user-attachments/assets/1cfc7f68-41ab-428b-bae6-825ac43be6fc",
    "age_rate": 13,
    "ticket_price": 100,
    "created_at": "2024-09-08T10:00:00Z",
    "aired_at": "2010-07-16T00:00:00Z"
  },
  {
    "id": 2,
    "title": "CHILDREN'S MUSEUM",
    "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "history": "The Children's Museum in Chennai was founded in 1997 as part of the Government Museum complex. It aims to educate children through interactive exhibits and hands-on learning experiences.",
    "release_date": "2014-11-07T00:00:00Z",
    "poster": "https://github.com/user-attachments/assets/6ed9b2e0-919e-4e40-a5ae-426a7c64a68f",
    "age_rate": 10,
    "ticket_price": 150,
    "created_at": "2024-09-08T10:01:00Z",
    "aired_at": "2014-11-07T00:00:00Z"
  },
  {
    "id": 3,
    "title": "DR. ARUN'S PHOTOGRAPHY AND VINTAGE CAMERA MUSEUM",
    "description": "Batman faces off against the Joker, a criminal mastermind intent on bringing chaos to Gotham.",
    "history": "Opened in 2019, Dr. Arun's Photography and Vintage Camera Museum is a private collection showcasing the evolution of photography. It houses over 1,500 antique cameras and photographic equipment.",
    "release_date": "2008-07-18T00:00:00Z",
    "poster": "https://github.com/user-attachments/assets/3ef3d59e-0f24-4b7b-be5c-9e06fe7f0616",
    "age_rate": 13,
    "ticket_price": 130,
    "created_at": "2024-09-08T10:02:00Z",
    "aired_at": "2008-07-18T00:00:00Z"
  },
  {
    "id": 4,
    "title": "Chennai Rail Museum",
    "description": "A poor family schemes to become employed by a wealthy family and infiltrate their household.",
    "history": "Established in 2002, the Chennai Rail Museum is located in the ICF premises. It showcases the rich heritage of Indian Railways, featuring vintage locomotives, coaches, and railway artifacts.",
    "release_date": "2019-05-30T00:00:00Z",
    "poster": "https://github.com/user-attachments/assets/e59c4b98-0332-4ab3-8072-79725c82a692",
    "age_rate": 15,
    "ticket_price": 100,
    "created_at": "2024-09-08T10:03:00Z",
    "aired_at": "2019-05-30T00:00:00Z"
  },
  {
    "id": 5,
    "title": "Vivekananda House",
    "description": "The Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
    "history": "Originally known as Ice House, this building was renamed Vivekananda House in 1963. It's where Swami Vivekananda stayed in 1897 and now serves as a museum dedicated to his life and teachings.",
    "release_date": "2019-04-26T00:00:00Z",
    "poster": "https://github.com/user-attachments/assets/a6fd9430-bd95-4af7-bbad-3ca4aedf147c",
    "age_rate": 10,
    "ticket_price": 120,
    "created_at": "2024-09-08T10:04:00Z",
    "aired_at": "2019-04-26T00:00:00Z"
  },
  {
    "id": 6,
    "title": "Fort St. George Museum",
    "description": "A gritty character study of Arthur Fleck, a man disregarded by society who transforms into the Joker.",
    "history": "Established in 1948, the Fort St. George Museum is located within the first British fortress in India. It houses artifacts from the colonial period, including weapons, coins, and documents.",
    "release_date": "2019-10-04T00:00:00Z",
    "poster": "https://github.com/user-attachments/assets/b820ffd9-e527-4072-8e46-32d552150d5e",
    "age_rate": 18,
    "ticket_price": 120,
    "created_at": "2024-09-08T10:05:00Z",
    "aired_at": "2019-10-04T00:00:00Z"
  },
  {
    "id": 7,
    "title": "National Art Gallery Chennai",
    "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    "history": "The National Art Gallery in Chennai was established in 1907. It is housed in a Victorian-style building and showcases paintings from various Indian art schools, including Tanjore, Rajput, and Mughal.",
    "release_date": "1999-03-31T00:00:00Z",
    "poster": "https://github.com/user-attachments/assets/50a8d468-36d3-4c59-90a7-61084791669c",
    "age_rate": 15,
    "ticket_price": 20,
    "created_at": "2024-09-08T10:06:00Z",
    "aired_at": "1999-03-31T00:00:00Z"
  },
];

export async function GET() {
  return NextResponse.json(museumData);
}