import { useState, useEffect } from 'react';

export const useTypewriter = (words: string[], typeSpeed: number = 100, deleteSpeed: number = 50, delay: number = 1500) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let ticker: ReturnType<typeof setTimeout>;
    
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      if (isDeleting) {
        setText(prev => prev.substring(0, prev.length - 1));
      } else {
        setText(prev => fullText.substring(0, prev.length + 1));
      }

      let speed = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && text === fullText) {
        speed = delay;
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
        speed = 500; // Small pause before next word
      }

      ticker = setTimeout(handleTyping, speed);
    };

    ticker = setTimeout(handleTyping, typeSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, words, typeSpeed, deleteSpeed, delay]);

  return text;
};
