import React from "react";

export const FilterSection = ({ filterType }) => {

    return (
        <div className="text-[#494c6b] flex justify-center gap-8 border-[#6b6d7c] border-b-[1px] px-5 mx-5 h-16 text-sm">
            <button type="button" onClick={() => filterType("all")} className="focus:font-bold">All</button>
            <button type="button" onClick={() => filterType("active")} className="focus:font-bold">Active</button>
            <button type="button" onClick={() => filterType("completed")} className="focus:font-bold">Completed</button>
        </div>
    );
}