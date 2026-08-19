import { useState } from "react";

const PrioritySelector = ({ selected = "Select Priority", setSelected }) => {

    const [isOpen, setIsOpen] = useState(false);

    const priorities = ["Low", "Medium", "High"];

    const priorityClasses = {
        "Select Priority":
            "bg-zinc-700 border border-zinc-600 text-white rounded-full cursor-pointer hover:bg-zinc-600",

        Low:
            "text-green-200 bg-green-500 rounded-full border border-green-800 cursor-pointer hover:bg-green-600",

        Medium:
            "text-yellow-700 bg-yellow-500 rounded-full border border-yellow-800 cursor-pointer hover:bg-yellow-600",

        High:
            "text-red-200 bg-red-500 rounded-full border border-red-800 cursor-pointer hover:bg-red-600"
    };

    const selectPriority = (priority) => {
        setSelected(priority);
        setIsOpen(false);
    };

    return (
        <div className="relative h-9 w-36 shrink-0">

            <button
                className={`${priorityClasses[selected]} h-9 w-full px-4 text-sm`}
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                {selected}
            </button>

            {isOpen && (
                <div className="absolute left-0 top-full z-10 mt-3 flex w-max gap-2 rounded-full border border-zinc-600 bg-zinc-800 p-2 shadow-lg">

                    {priorities.map((priority) => (
                        <button
                            key={priority}
                            className={`${priorityClasses[priority]} h-8 px-4 text-sm`}
                            type="button"
                            onClick={() => selectPriority(priority)}
                        >
                            {priority}
                        </button>
                    ))}

                </div>
            )}

        </div>
    );
};

export default PrioritySelector;