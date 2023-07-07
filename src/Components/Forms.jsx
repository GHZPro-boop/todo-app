import { useState } from "react";

export const Forms = ({ handleAddEvent, isDarkMode }) => {
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddEvent(userInput);
        setUserInput("");
    }

    const formClassName = isDarkMode ? "bg-gray-800" : "bg-white";
    const inputClassName = isDarkMode ? "text-white text-sm px-3 py-1 w-full block bg-gray-800" :
        "text-gray-900 text-sm px-3 py-1 w-full block";

    return (
        <div className={`${formClassName} rounded-md px-5 py-2`}>
            <form onSubmit={handleSubmit} className="flex items-center">
                <div className="w-full">
                    <input type="text" onChange={(e) => setUserInput(e.target.value)} value={userInput} placeholder="Create new ToDo item" className={`${inputClassName}`} />
                </div>
                <button type="submit" className={`text-white ${isDarkMode ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                    : "bg-gradient-to-r from-blue-500 to-green-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-blue-200"} font-medium rounded-lg text-sm px-5 py-1.5 text-center`}>ADD</button>
            </form>

        </div>
    );
}