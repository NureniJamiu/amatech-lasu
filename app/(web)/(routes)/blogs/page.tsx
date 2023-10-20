
// import moment from "moment/moment";
// import axios from "axios";
// import { usePathname } from "next/navigation";
import TitleHero from "../../_components/TitleHero";
import BlogPageCard from "../../_components/BlogPageCard";

const posts = [
    {
        id: 1,
        title: "Project Management Life cycle",
        content: "Every kind of project goes through the same stages, it may be more or less. Although each project will require its own set of unique processes and tasks, they all follow a similar framework. There’s always a beginning, a middle, and an end. This is called the Project Lifecycle. The project management lifecycle helps provide some predictability and gives the project manager a way to tackle tasks in distinct phases",
        createdAt: "22 Oct, 2023"

    },
    {
        id: 2,
        title: "Project Management Life cycle",
        content: "Every kind of project goes through the same stages, it may be more or less. Although each project will require its own set of unique processes and tasks, they all follow a similar framework. There’s always a beginning, a middle, and an end. This is called the Project Lifecycle. The project management lifecycle helps provide some predictability and gives the project manager a way to tackle tasks in distinct phases",
        createdAt: "22 Oct, 2023"

    },
    {
        id: 3,
        title: "Project Management Life cycle",
        content: "Every kind of project goes through the same stages, it may be more or less. Although each project will require its own set of unique processes and tasks, they all follow a similar framework. There’s always a beginning, a middle, and an end. This is called the Project Lifecycle. The project management lifecycle helps provide some predictability and gives the project manager a way to tackle tasks in distinct phases",
        createdAt: "22 Oct, 2023"

    },
]

const Blogs = () => {
    // const pathname = usePathname();
    //   const [posts, setPosts] = useState([]);
    // console.log(posts[0]);
    //   useEffect(() => {
    //     async function fetchData() {
    //       const response = await axios.get("/api/posts");
    //       setPosts(response.data.posts);
    //     }
    //     fetchData();
    //   }, []);

    return (
        <section>
            <TitleHero title="Blog Posts" />
            <div className="px-8 md:px-24">
                <div className="flex gap-3 items-center mb-12 mt-5 py-8 md:py-8 border-b text-sm md:text-[15px]">
                    <span className="text-gray-600">Category:</span>
                    <select className="w-28 text-center text-green-600 border rounded py-2">
                        <option value="0">General</option>
                        <option value="1">Sports</option>
                        <option value="2">Welfare</option>
                        <option value="3">SLC</option>
                        <option value="4">Finance</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-8">
                    {posts.map((_, index) => (
                        <BlogPageCard
                            key={index}
                            date={_.createdAt}
                            title={_.title}
                            desc={_.content}
                            slug="test"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
