import React from 'react';

export default function Button({ text, textSize, display, onClick }) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`${display} ${textSize} active:translate-y-0.5 active:translate-x-0.5 mx-2 mb-2 py-2 px-2 rounded bg-primary`}
    >
      {text}
    </button>
  );
}
