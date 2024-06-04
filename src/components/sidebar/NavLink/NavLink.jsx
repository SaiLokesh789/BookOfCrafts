"use client"
import Link from 'next/link';
import styles from './NavLink.module.css'
import { usePathname } from 'next/navigation';

const NavLink = ({ item, isCollapse }) => {

  let pathName = usePathname();

  return (
    <Link href={item.path} className={`${styles.container} `} isCollapse={isCollapse} >
      <div className={`${styles.link}  dark:text-gray-200 ${pathName == item.path && styles.active}`} isCollapse={isCollapse}>
        <div className={styles.icon} isCollapse={isCollapse}>
          {item.icon}
        </div>
        <div className={styles.name} isCollapse={isCollapse}>
          {item.name}
        </div>
      </div>
    </Link>
  )
}

export default NavLink