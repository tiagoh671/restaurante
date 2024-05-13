import Image from 'next/image'
import styles from './Card.module.css'

export default function Card(props){
  return(
    <div className={styles.card_container}>
      <Image src={props.image}/>
      <div>
        <h3>{props.title}</h3>
        <span>{props.categoria}</span>
        <p>{props.descricao}</p>
        <div className={styles.texto_preco}>
          <p>{props.valor}</p>
        </div>
      </div>
    </div>
  )
}