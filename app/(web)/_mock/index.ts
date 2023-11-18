import missionImage from "../../../public/mission.svg"
import classroomImage from "../../../public/classroom.svg"
import courseOutlineImage from "../../../public/outline.svg"

export const components: { title: string; href: string; description: string }[] = [
    {
        title: "Learning Hub",
        href: "/",
        description:
            "Unlock the power of Project Management with our comprehensive online courses.",
    },
    {
        title: "Course Outlines",
        href: "/",
        description:
            "A collection of all courses outlines.",
    },
    {
        title: "CGPA Calculator",
        href: "/",
        description:
            "Calculate your CPGA with ease.",
    },

]

export const sectionContents = [
    {
        title: "Our Mission",
        bodyText: "Empowering Management Technology students through a comprehensive and dynamic educational experience. We're your one-stop solution for course outlines, learning materials, CGPA calculations, school news, and industry insights.",
        btnText: "Learn more",
        image: missionImage
    },
    {
        title: "Learning HUB",
        bodyText: "Explore our Expert-curated courses, including learning materials such as textbooks, notes, and handouts. Enhance understanding with immersive experiences and reinforce knowledge. Your go-to resource for comprehensive learning.",
        btnText: "Visit now",
        image: classroomImage
    },
    {
        title: "Course Outline",
        bodyText: "Explore our Expert-curated courses, including learning materials such as textbooks, notes, and handouts. Enhance understanding with immersive experiences and reinforce knowledge. Your go-to resource for comprehensive learning.",
        btnText: "View Outline",
        image: courseOutlineImage
    }
]
