import React from "react";
import { SearchIcon } from "../../assets/icons/SearchIcon";

export interface SearchPopupItem {
    name: string; 
    icon: React.ReactNode; 
}

// Define the list of items
export const SearchItems: SearchPopupItem[] = [
    { name: "Definition", icon: <SearchIcon/> },  
    { name: "Formula", icon: <SearchIcon/>  },
    { name: "Example", icon: <SearchIcon /> },
    { name: "Reason", icon: <SearchIcon /> },
];

