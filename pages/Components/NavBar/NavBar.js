import React, {useState} from 'react'
import { Link } from '@mui/material'
import styles from '../../../styles/NavBar.module.css'
import Hidden from '@mui/material/Hidden'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer'
import CloseIcon from '@mui/icons-material/Close';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const navLinks = [
    {name:"Accidentes de Trabajo ART", href: "/"},
    {name:"Enfermedades profesionales", href: "/"},
    {name:"Accidentes de Transito", href: "/"},
    {name:"Despidos", href: "/"},
]



function NavBar() {

  const [open, setOpen] = useState(false)
    
  return (
    <>
    <header className={styles.header}>
        <div className={styles.logo}>
            <img src="./img/Lex-logo.png" alt="logo" className={styles.logoimg}/>
        </div>
        <nav>
            <Hidden mdDown>
              <div className={styles.NavLinksContainer}>
                { navLinks.map((item) => (<Link href={item.href} key={item.name} className={styles.link}>{item.name}</Link> )) }
                </div>
            </Hidden>
            <Hidden mdUp>
                <IconButton>
                    <MenuIcon onClick={ () => setOpen(true) }/>
                </IconButton>
            </Hidden>
        </nav>
    </header>
    <Drawer anchor='top' open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} className={styles.drawer}>
        <div className={styles.headerm}>
        <div className={styles.logo}>
            <img src="./img/Lex-logo.png" alt="logo" className={styles.logoimg}/>
        </div>
        <IconButton className={styles.close}>
            <CloseIcon onClick={ () => setOpen(false)}/>
        </IconButton>
        </div>
        <div className={styles.hamburguerLinks}>
            <div className={styles.eachLink}>
                <Link href="/" className={styles.linksm}>Accidentes de trabajo ART</Link>
            </div>
            <div className={styles.eachLink}>
                <Link href="/" className={styles.linksm}>Enfermedades profesionales</Link>
            </div>
            <div className={styles.eachLink}>
                <Link href="/" className={styles.linksm}>Accidentes de Tránsito</Link>
            </div>
            <div className={styles.eachLink}>
                <Link href="/" className={styles.linksm}>Despidos</Link>
            </div>
        </div>
    </Drawer>

    </>
 )
}

export default NavBar