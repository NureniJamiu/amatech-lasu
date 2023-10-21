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
    // ...
  ]
  