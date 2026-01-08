import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo1.png";
import { CarWidget } from "./CarWidget";

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div>
        <img src={logo} className={styles.logoNav} alt="logo de empresa" />
      </div>
      <div className={styles.menuNavBar}>
        <ul className={styles.ul__menu}>
          <li className={styles.li__menu}>
            <a className={styles.a__menu} href="#">
              AROS
            </a>
          </li>
          <li className={styles.li__menu}>
            <a className={styles.a__menu} href="#">
              PULSERAS
            </a>
          </li>
          <li className={styles.li__menu}>
            <a className={styles.a__menu} href="#">
              COLLARES
            </a>
          </li>
          <li className={styles.li__menu}>
            <a className={styles.a__menu} href="#">
              ANILLOS
            </a>
          </li>
          <li className={styles.li__menu}>
            <a className={styles.a__menu} href="#">
              DIGES
            </a>
          </li>
        </ul>
      </div>
      <div>
        <CarWidget />
      </div>
    </nav>
  );
};
