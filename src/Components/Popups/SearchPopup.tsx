import React from "react";
import { SearchPopupItem } from "./SearchPopupItems";
import { SearchIcon } from "../../assets/icons/SearchIcon";



interface SearchPopupItemProps {
    items: SearchPopupItem[];
}

//TODO : add fuzzy find to the search
//TODO : remove input tag focus highlighting
const SearchPopupItemComponent = ({ items }: SearchPopupItemProps) => {
    return (
        <>
            {items.map((item, index) => (
                <div key={index} className="flex flex-row gap-2 items-center w-full h-8 p-2">
                    <div className="w-1/4 h-4">
                    {item.icon}
                    </div>
                    
                    <h5>{item.name}</h5>
                </div>
            ))}
        </>
    );
};

export const SearchPopup = () => {
    const items: SearchPopupItem[] = [{ name: "Definition", icon: <SearchIcon /> }];

    return (
        <div className="flex flex-col w-60 p-2 h-auto border rounded-lg border-purple-500">
            <input
                type="text"
                className="flex flex-col pt-2 h-8 w-full border border-purple-600 rounded "
            />
            <section id="Auto-completion-item">
                <SearchPopupItemComponent items={items} />
            </section>
        </div>
    );
};
