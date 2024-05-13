import styles from './SecaoCardapio.module.css'

export default function SecaoCardapio(props){
  return(
    <div className={styles.container_cardapio}>
      <h2>Cardápio</h2>

      <div className={styles.container_card}>
        {props.children}
      </div>
    </div>
  )
}