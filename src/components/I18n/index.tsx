import { Flag } from 'components/Flag';

import { useTranslation } from 'react-i18next';

import EuaFlag from 'assets/eua-flag.svg';
import BrasilFlag from 'assets/brasil-flag.svg';

import styles from './styles.module.scss';

export const I18n: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const selectedLanguage = i18n.language;

  return (
    <div className={styles['translate-container']}>
      <Flag
        image={BrasilFlag}
        isSelected={selectedLanguage === 'pt_BR'}
        onClick={() => handleChangeLanguage('pt_BR')}
        title={'PT-BR'}
      />

      <Flag
        image={EuaFlag}
        isSelected={selectedLanguage === 'en_US'}
        onClick={() => handleChangeLanguage('en_US')}
        title={'EN-US'}
      />
    </div>
  );
};
