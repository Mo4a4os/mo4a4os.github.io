import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";


interface LanguageContextType {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

const lang = localStorage.getItem('lang') || 'ru';

export const LanguageContext = createContext<LanguageContextType>({
  language: lang,
  setLanguage: () => {}, 
});
