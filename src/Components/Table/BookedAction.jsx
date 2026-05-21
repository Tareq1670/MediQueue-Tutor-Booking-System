import { Button } from "@heroui/react";
import { ImCancelCircle } from "react-icons/im";

const BookedAction = ({allBook}) => {
    return (
        <div>
            <Button
                isIconOnly
                size="sm"
                variant="flat"
                className="w-8 h-8 rounded-lg bg-red-50/50 dark:bg-red-950/10 text-red-600 dark:text-red-400 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white border border-red-100 dark:border-red-950/30 hover:border-transparent transition-all duration-200 font-bold"
            >
                <ImCancelCircle size={14} />
            </Button>
        </div>
    );
};

export default BookedAction;
