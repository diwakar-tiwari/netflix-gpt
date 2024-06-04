import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  console.log("Current language key:", langKey); // Debugging line

  if (!lang[langKey]) {
    console.error("Invalid langKey:", langKey); // Error logging
    return null; // Or handle this case appropriately
  }
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSearchHolder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-green-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
