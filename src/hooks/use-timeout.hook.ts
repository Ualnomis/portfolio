import React, { useEffect, useRef } from 'react';

// Define the useTimeout function with TypeScript types
export default function useTimeout(
  callback: () => void, // Type the callback as a function that returns nothing
  delay: number | null, // Type the delay as either a number or null
): React.MutableRefObject<null | NodeJS.Timeout> {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const savedCallback = useRef(callback);

  // Update the ref when callback changes
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set and clear the timeout
  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };
    if (typeof delay === 'number') {
      timeoutRef.current = setTimeout(tick, delay);
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [delay]);

  return timeoutRef;
}
