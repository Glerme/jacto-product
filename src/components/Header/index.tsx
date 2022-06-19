import logo from 'assets/logo.svg';
import classNames from 'classnames';

import { FiMenu } from 'react-icons/fi';

import { I18n } from 'components/I18n';
import { Translate } from 'components/Translate';

import styles from './styles.module.scss';

interface HeaderProps {
  isMenuOpen: boolean;
  onToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, onToggle }) => {
  return (
    <>
      <nav className={styles['navbar-container']}>
        <div className={styles['logo-container']}>
          <img src={logo} alt="Jacto" title="Jacto" />
          <FiMenu size={30} color={'#ec6608'} onClick={onToggle} />
        </div>

        <header className={styles['header-container']}>
          <div
            className={classNames(
              styles['menu-container'],
              isMenuOpen && styles['menu-open'],
            )}
          >
            <ul
              className={classNames(
                styles['list-container'],
                isMenuOpen && styles['menu-open'],
              )}
            >
              <li>
                <a href="#">
                  <Translate path="About" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Translate path="Contact" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Translate path="Product" />
                </a>
              </li>
              <li>
                <I18n />
              </li>
            </ul>
          </div>
        </header>
      </nav>
    </>
  );
};
