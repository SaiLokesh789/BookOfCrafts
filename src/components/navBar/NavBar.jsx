"use client"
import styles from './Navbar.module.css'
import { IoMenu } from "react-icons/io5";
import Image from 'next/image';
import ToggleTheme from '../toggleTheme/ToggleTheme';

const NavBar = ({ isCollapse, setIsCollapse }) => {

  function setIsCollapsehandle() {
    setIsCollapse(
      (previous) => (previous == "true" ? "false" : "true")
    )
  }

  return (
    <div className={`${styles.container} dark:bg-dark`}>
      <div className=" flex flex-col mx-1 text-gray-600 dark:text-gray-100 p-3 cursor-pointer rounded-full" onClick={setIsCollapsehandle}>
        <IoMenu size={28} />
      </div>
      <div className={styles.title}>
        <div className={styles.logo}>
          <Image src="/logo.webp" alt='Logo' fill />
        </div>
        <div className={styles.titleCard}>
          <h1 className={`${styles.title} dark:text-white`}>
            Book of Crafts
          </h1>
        </div>
      </div>
      <div>
        <ToggleTheme />
      </div>
    </div>
  )
}

export default NavBar