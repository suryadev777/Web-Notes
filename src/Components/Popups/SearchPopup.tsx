
import { useState } from "react";
 // @ts-ignore
import fuzzysearch from "fuzzysearch";
import { SearchPopupItem } from "./SearchPopupItems";



interface SearchPopupItemProps {
    items: SearchPopupItem[];
}

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

export const SearchPopup = ({ items }: SearchPopupItemProps) => {

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState<SearchPopupItem[]>(items);

    // Handle search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        if (query.trim()) {
            const results = items.filter(item =>
                fuzzysearch(query, item.name.toLowerCase())
            );
            setFilteredItems(results);
        } else {
            setFilteredItems(items); // Reset to original items if query is empty
        }
    };

    return (
        <div className="flex flex-col w-60 p-2 h-auto border rounded-lg border-purple-500">
            <input
                type="text"
                className="flex flex-col pt-2 h-8 w-full border border-purple-600 rounded focus:outline-none"
                onChange={handleSearchChange}
                value={searchQuery}
            />
            <section id="Auto-completion-item">
                <SearchPopupItemComponent items={filteredItems} /> 
            </section>
        </div>
    );
};
