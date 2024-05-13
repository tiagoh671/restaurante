import Image from 'next/image'
import styles from './Categorias.module.css'

export default function Categorias(props){

  return(
    <nav className={styles.container_nav}>
      {props.children}
    </nav>
  )
}