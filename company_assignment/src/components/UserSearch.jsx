// src/components/UserSearch.js
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Trie from "../utils/trie";
import { debounce } from "../utils/debounce";
import { Search } from "lucide-react";

const UserSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState(""); 
  const trieRef = useRef(new Trie()); // Store Trie persistently

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      res.data.forEach(user => trieRef.current.insert(user.name.toLowerCase()));
    });
  }, []);

  const handleSearch = debounce((newQuery) => {
    if (newQuery === "") {
      setSearchResults([]);
    } else {
      setSearchResults(trieRef.current.search(newQuery)); // Use the stored Trie
    }
  }, 300);

  const handleChange = (e) => {
    const newQuery = e.target.value.toLowerCase();
    setQuery(newQuery);

    if (newQuery) {
      setSearchResults(trieRef.current.search(newQuery)); 
    } else {
      setSearchResults([]);
    }

    handleSearch(newQuery);
  };

  return (
    <div className="container mx-auto p-10">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search Users"
          value={query}
          onChange={handleChange}
          className="w-full p-3 pl-10 border rounded focus:ring-2 focus:ring-blue-500"
        />
        <Search className="cursor-pointer absolute left-3 top-4 text-gray-500" size={20} />
      </div>

      {searchResults.length > 0 && (
        <ul className="mt-4 bg-white shadow-lg rounded-lg">
          {searchResults.map((name, index) => (
            <li key={index} className="p-2 border-b last:border-none">
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserSearch;
