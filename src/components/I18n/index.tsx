import { Flag } from 'components/Flag';

import { useTranslation } from 'react-i18next';

import BrasilFlag from 'assets/brasil-flag.svg';
import EuaFlag from 'assets/eua-flag.svg';

export const I18n: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const selectedLanguage = i18n.language;

  return (
    <div
      className="flags-container"
      style={{ display: 'flex', width: '100px' }}
    >
      <Flag
        image={BrasilFlag}
        isSelected={selectedLanguage === 'pt_BR'}
        onClick={() => handleChangeLanguage('pt_BR')}
      />

      <Flag
        image={EuaFlag}
        isSelected={selectedLanguage === 'en-US'}
        onClick={() => handleChangeLanguage('en-US')}
      />
    </div>
  );
};
