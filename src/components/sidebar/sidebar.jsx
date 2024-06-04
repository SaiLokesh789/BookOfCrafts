"use client"
import styles from './sidebar.module.css'
import { BiSolidContact } from "react-icons/bi";
import { RiDashboardFill } from "react-icons/ri";
import { TbBrandMinecraft } from "react-icons/tb";
import NavLink from './NavLink/NavLink';

const Sidebar = ({ isCollapse, setIsCollapse }) => {

  function setIsCollapsehandle() {
    setIsCollapse(
      (previous) => (previous == "true" ? "false" : "true")
    )
  }

  let items = [
    {
      path: "/",
      name: "Dashboard",
      icon: <RiDashboardFill />
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <BiSolidContact />
    },
    {
      path: "/recipes",
      name: "Crafts",
      icon: <TbBrandMinecraft />
    }
  ]

  return (
    <div className={`${styles.container}`} collapse={isCollapse} >
      <div className={styles.links}>
        {items.map((link) => {
          return (
            <div className={styles.link}>
              {<NavLink item={link} key={link.name} isCollapse={isCollapse} setIsCollapse={setIsCollapse} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar