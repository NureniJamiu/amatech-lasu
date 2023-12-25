import missionImage from "../../../public/mission.svg"
import classroomImage from "../../../public/classroom.svg"
import courseOutlineImage from "../../../public/outline.svg"
import calculatorImage from "../../../public/calculator.svg"

export const components: { title: string; href: string; description: string }[] = [
    {
        title: "Learning Hub",
        href: "/academics/learning-hub",
        description:
            "Unlock the power of Project Management with our comprehensive online courses.",
    },
    {
        title: "All courses",
        href: "/academics/all-offered-courses",
        description:
            "A collection of all courses across all levels in the department.",
    },
    {
        title: "CGPA Calculator",
        href: "/academics/cgpa-calculator",
        description:
            "Calculate your CPGA with ease.",
    },

]

export const sectionContents = [
    {
        title: "Our Mission",
        bodyText: "Our mission is: (i) to nurture and develop quality professional manpower with capacity to operate in a dynamic world. (ii) to develop a public oriented professional human capital relevant to national and international organizations. (iii) to develop students capacity to serve as trained change agents in private and public organizations. (iv) to facilitate th acquisition of knowledge through research in the area of management.",
        image: missionImage
    },
    {
        title: "Learning HUB",
        bodyText: "Explore our Expert-curated courses, including learning materials such as textbooks, notes, and handouts. Enhance understanding with immersive experiences and reinforce knowledge. Your go-to resource for comprehensive learning.",
        btnText: "Visit now",
        href: "/academics/learning-hub",
        image: classroomImage
    },
    {
        title: "Course Outline",
        bodyText: "Our commitment to LASU Management Technology students includes providing a carefully curated collection of course outlines. These materials are specifically designed to empower students with the information they need to make well-informed decisions about their academic journey.",
        btnText: "View Outline",
        href: "/academics/all-offered-courses",
        image: courseOutlineImage
    },
    {
        title: "CGPA Calculator",
        bodyText: "Track your academic progress and plan your journey at the department of Management Technology, LASU. Your CGPA is key, reflecting your academic performance and commitment to excellence.",
        btnText: "Try it now",
        href: "/academics/cgpa-calculator",
        image: calculatorImage
    }
]
