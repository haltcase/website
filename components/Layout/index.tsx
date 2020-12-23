import React, { useState } from "react"
import { ChevronRight, Menu, X } from "react-feather"
import classes from "clsx"
import Link from "next/link"
import Head from "next/head"
import { useRouter } from "next/router"

import links from "../../client-data/nav-links"
import Footer from "../../components/Footer"

import styles from "./layout.module.css"

interface Props {
  title?: string
}

interface NavLinkProps {
  text: string
  target: string
}

const NavLink: React.FunctionComponent<NavLinkProps> = ({
  text,
  target
}) => {
  const router = useRouter()

  return (
    <Link href={target}>
      <a className={classes(styles.navLink, router.pathname === target && styles.navLinkActive)}>
        <span className={styles.navLinkBefore}><ChevronRight size="10" /></span>
        <span className={styles.navLinkText}>{text}</span>
      </a>
    </Link>
  )
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "bolingen.me"
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const onMenuClick = (): void => setIsOpen(!isOpen)

  return (
    <div className={styles.app}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="rgb(51, 95, 112)" />
      </Head>
      <header className={classes(styles.header, isOpen && styles.open)}>
        <nav className={styles.navLeft}>
          <Link href="/">
            <a className={styles.logoContainer} title="Home">
              <img
                className={styles.aboutHeaderAvatar}
                src="https://avatars0.githubusercontent.com/u/16605186?s=460&u=56e08ad237910b19b4047e3248ff0179047a3e72&v=4"
                alt="" />
              <span>bo lingen</span>
            </a>
          </Link>
        </nav>

        <nav className={styles.navRight}>
          {/*
          <span className={styles.navIcon}>
            <Github size="18" />
          </span>

          <span className={styles.navIcon}>
            <Twitter size="18" />
          </span>
          */}

          {
            links.map(link =>
              <NavLink {...link} key={link.target} />
            )
          }

          <span className={styles.navMenu} onClick={onMenuClick}>
            {isOpen ? <X size="18" /> : <Menu size="18" /> }
          </span>
        </nav>
      </header>

      {children}

      <Footer />
    </div>
  )
}

export default Layout
