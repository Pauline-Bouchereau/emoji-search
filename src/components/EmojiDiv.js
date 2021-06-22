// Import tools
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const EmojiDiv = ({ emoji }) => {
  const [emojiCopied, setEmojiCopied] = useState(false);
  return (
    <div
      onMouseLeave={() => {
        setTimeout(() => {
          setEmojiCopied(false);
        }, 1500);
      }}
    >
      <div>
        <CopyToClipboard
          text={emoji.symbol}
          onCopy={() => {
            setEmojiCopied(true);
          }}
        >
          <p>{emoji.symbol}</p>
        </CopyToClipboard>
        <CopyToClipboard
          text={emoji.symbol}
          onCopy={() => {
            setEmojiCopied(true);
          }}
        >
          <p>{emoji.title}</p>
        </CopyToClipboard>
      </div>
      {!emojiCopied ? (
        <CopyToClipboard
          text={emoji.symbol}
          onCopy={() => {
            setEmojiCopied(true);
          }}
        >
          <span>Click to copy the Emoji !</span>
        </CopyToClipboard>
      ) : (
        <span>Emoji copied 😎</span>
      )}
    </div>
  );
};

export default EmojiDiv;
