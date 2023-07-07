import React from "react";
import { MdDeleteForever, MdCheckCircleOutline, MdCancel } from "react-icons/md"

export const Item = ({ itemData, deleteItem, statusUpdate }) => {

    return (
        <div>
            <div className="text-[#303249] px-5 h-14 flex mx-5 justify-between items-center border-[#6b6d7c] border-b-[1px]">
                <div className="flex items-center">
                    {
                        itemData.status ? (
                            <MdCheckCircleOutline onClick={() => statusUpdate(itemData.id)} className="h-4 w-4 mr-3 text-[#3a7cfd]" />
                        ) : (
                            <MdCancel onClick={() => statusUpdate(itemData.id)} className="h-4 w-4 mr-3 text-[#3a7cfd]" />
                        )
                    }
                    <p className={`${itemData.status && "line-through"} text-sm lg:text-lg`}>{itemData.text}</p>
                </div>
                <MdDeleteForever onClick={() => deleteItem(itemData.id)} className="text-[#202e4d] h-5 w-5" />
            </div>
        </div>
    );

}