import { UserButton } from "@clerk/nextjs";

const Dashboard = () => {
    return (
        <UserButton afterSignOutUrl="/" />
    )
}

export default Dashboard