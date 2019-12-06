import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const useDarkMode = () => {
  const [values, setValues] = useLocalStorage('dark');
   

  useEffect(() => {
    if (values === true) {
      return document.querySelector('body').classList.add('dark-mode')
    } else {
      return document.querySelector('body').classList.remove('dark-mode')
    }
  },[values])

  return [values, setValues];
};