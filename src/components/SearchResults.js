// Import tools
import { useState, useEffect } from "react";

// Import component
import EmojiDiv from "./EmojiDiv";

// Import JSON with emojis
import emojiList from "../assets/emoji-list.json";

const SearchResult = ({ search }) => {
  const [emojiResults, setEmojiResults] = useState(emojiList.slice(0, 20));

  useEffect(() => {
    // Modify results every time the search changes
    if (search) {
      const newEmojiResults = [];

      for (let i = 0; i < emojiList.length; i++) {
        // If the search is not an empty string
        if (emojiList[i].keywords.indexOf(search) !== -1) {
          // Maximum number of results --> 20
          if (newEmojiResults.length < 20) {
            // Add the emoji to the result tab
            newEmojiResults.push(emojiList[i]);
          }
        }
      }
      setEmojiResults(newEmojiResults);
    }
  }, [search]);

  return (
    <div className="results">
      {emojiResults.map((emoji, index) => {
        return index < 20 && <EmojiDiv emoji={emoji} key={emoji.title} />;
      })}
    </div>
  );
};

export default SearchResult;
