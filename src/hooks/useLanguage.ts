import { useTranslation } from 'react-i18next';

interface UseLanguageReturn {
  language: 'pt_BR' | 'en_US';
}

export const useLanguage = (): UseLanguageReturn => {
  const { i18n } = useTranslation();

  const selectedLanguage = i18n.language;

  if (selectedLanguage === 'pt_BR') {
    return {
      language: 'pt_BR',
    };
  } else {
    return {
      language: 'en_US',
    };
  }
};
