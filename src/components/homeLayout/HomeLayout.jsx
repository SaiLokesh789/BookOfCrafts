"use client"
import { useState } from 'react';
import styles from './HomeLayout.module.css'
import Sidebar from '../sidebar/sidebar';
import NavBar from '../navBar/NavBar';

const HomeLayout = ({ children }) => {

  let [isCollapse, setIsCollapse] = useState("true");

  return (
    <div className={styles.container}>
      <NavBar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <div className={styles.mainContainer}>
        <div className={`${styles.sidebar} dark:bg-dark`} collapse={isCollapse}>
          <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
        </div>
        <div className={styles.childContainer} collapse={isCollapse} >
          {children}
        </div>
      </div>
    </div>
  )
}

export default HomeLayout