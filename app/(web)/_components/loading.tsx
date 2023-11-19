import { Loader } from "lucide-react";
import React from "react";

const loading = () => {
    return <div className="flex items-center justify-center h-full">
        <Loader size={100} className="animate-spin" color="gray" />
    </div>;
};

export default loading;
