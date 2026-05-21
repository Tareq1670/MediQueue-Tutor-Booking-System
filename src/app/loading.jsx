import { Spinner } from "@heroui/react";
import React from "react";

const loadingPage = () => {
    return (
        <div className="flex items-center justify-center min-h-[20vh] w-full">
            <div className="flex flex-col items-center gap-2">
                <Spinner color="success" />
                <span className="text-xs text-muted">Success</span>
            </div>
        </div>
    );
};

export default loadingPage;
