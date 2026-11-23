import { useEffect, useState } from 'react';

export function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 45, pauseMs = 1600) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return undefined;

    const currentWord = words[wordIndex % words.length];
    let timeoutId;

    if (!isDeleting && text === currentWord) {
      timeoutId = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const nextText = isDeleting
        ? currentWord.slice(0, text.length - 1)
        : currentWord.slice(0, text.length + 1);
      timeoutId = setTimeout(
        () => setText(nextText),
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeoutId);
  }, [words, wordIndex, text, isDeleting, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}
