import { useTranslation } from 'react-i18next';

interface TranslationProps {
  path: string;
}

export const Translate: React.FC<TranslationProps> = ({ path }) => {
  const { t } = useTranslation();

  return <>{t(path)}</>;
};
