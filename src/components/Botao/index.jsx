import styles from './Botao.module.css'
import Image from 'next/image'

export default function Botao(props){

  return(
    <button onClick={props.event}  className={`${styles.button} ${props.acender}`}>
      <Image src={props.image} alt={`imagem-${props.nome}`}/>
      <p>{props.nome}</p>
    </button>
  )
}