type Lecturer = {
    id: string
    title: string
    firstname: string
    lastname: string
    email: string
    phone: number
}
type Member = {
    id: string
    firstname: string
    lastname: string
    role: string
    phone: number
    level: number
}

type Post = {
    id: string
    title: string
    category: string
    content: string
    image?: string
}

export const lecturers: Lecturer[] = [
    {
      id: "728ed52f",
      title: "Mr",
      firstname: "Olatomiwa",
      lastname: "Bright",
      email: "m@example.com",
      phone: 9123343333
    },
    {
      id: "489e1d42",
      title: "Mr",
      firstname: "Lawal",
      lastname: "Yusuf",
      email: "example@gmail.com",
      phone: 9123343333
    },
    // ...
]
  
export const members: Member[] = [
    {
      id: "728ed52f",
      firstname: "Daniel",
      lastname: "Adetimehin",
      role: "President",
      phone: 9123343333,
      level: 300
    },
    {
      id: "489e1d42",
      firstname: "Jamiu",
      lastname: "Nureni",
      role: "P.R.O",
      phone: 9123343333,
      level: 100
    },
    {
      id: "489e1d42",
      firstname: "Jamiu",
      lastname: "Nureni",
      role: "P.R.O",
      phone: 9123343333,
      level: 100
    },
    {
      id: "489e1d42",
      firstname: "Jamiu",
      lastname: "Nureni",
      role: "P.R.O",
      phone: 9123343333,
      level: 100
    },
    {
      id: "489e1d42",
      firstname: "Jamiu",
      lastname: "Nureni",
      role: "P.R.O",
      phone: 9123343333,
      level: 100
    },
    {
      id: "489e1d42",
      firstname: "Jamiu",
      lastname: "Nureni",
      role: "P.R.O",
      phone: 9123343333,
      level: 100
    },
    {
      id: "489e1d42",
      firstname: "Jamiu",
      lastname: "Nureni",
      role: "P.R.O",
      phone: 9123343333,
      level: 100
    },
    {
      id: "489e1d42",
      firstname: "Jamiu",
      lastname: "Nureni",
      role: "P.R.O",
      phone: 9123343333,
      level: 100
    },
    {
      id: "489e1d42",
      firstname: "Jamiu",
      lastname: "Nureni",
      role: "P.R.O",
      phone: 9123343333,
      level: 100
    },
    {
      id: "489e1d42",
      firstname: "Jamiu",
      lastname: "Nureni",
      role: "P.R.O",
      phone: 9123343333,
      level: 100
    },
    {
      id: "489e1d42",
      firstname: "Jamiu",
      lastname: "Nureni",
      role: "P.R.O",
      phone: 9123343333,
      level: 100
    },
    {
      id: "489e1d42",
      firstname: "Jamiu",
      lastname: "Nureni",
      role: "P.R.O",
      phone: 9123343333,
      level: 100
    },
    // ...
]

export const posts: Post[] = [
    {
      id: "728ed52f",
      title: "Why Project Managers should prioritize productivity",
      category: "General",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sit veniam excepturi aspernatur! Maiores est ratione voluptatem, itaque porro vel reprehenderit odio amet sed numquam. Enim pariatur nulla commodi tempore?",
      image: "",
    },
    {
      id: "72wjg52f",
      title: "Amatech set to have her Lunch and Awards Day event",
      category: "Social",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sit veniam excepturi aspernatur! Maiores est ratione voluptatem, itaque porro vel reprehenderit odio amet sed numquam. Enim pariatur nulla commodi tempore?",
      image: "",
    },
    // ...
]
  