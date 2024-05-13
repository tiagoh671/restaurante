import Head from "next/head";
import Topo from "../components/Topo";
import Categorias from "../components/Categorias";
import SecaoCardapio from "../components/SecaoCardapio";
import Card from "../components/Card";
import Botao from "../components/Botao";
import Image from 'next/image'
import Entrada from '../../public/Assets/entrada.png'
import Massas from '../../public/Assets/massa.png'
import Carnes from '../../public/Assets/carne.png'
import Bebidas from '../../public/Assets/bebidas.png'
import Saladas from '../../public/Assets/salada.png'
import Sobremesas from '../../public/Assets/sobremesa.png'
import Lupa from '../../public/Assets/lupa.png'
import styles from '../styles/Home.module.css'
import { useState } from "react";
import { retornaPratos, filtrarPrato, buscarPrato } from "../services";

export default function Home() {
  const [listaPratos, setListaPratos] = useState(retornaPratos())
  const [textoBusca, setTextoBusca] = useState('')
  const [botaoClicado, setBotaoClicado] = useState('')

  const handleFiltrarPratos = (categoria) =>{
    setListaPratos(filtrarPrato(categoria))
    setBotaoClicado(categoria)
    setTextoBusca('')
  }

  const handleBuscarPrato = (textoDigitado) =>{
    setTextoBusca(textoDigitado)
    setListaPratos(buscarPrato(textoDigitado))
    setBotaoClicado('')
  }

  return (
    <>
      <Head>
        <title>Restaurante</title>
        <meta name="description" content="Aqui temos o que você já viu de melhor para o seu paladar." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Topo/>
        <Categorias>
          <Botao event={() => handleFiltrarPratos('Entradas')} 
          acender={botaoClicado === 'Entradas' ? styles.acenderBtn : styles.apagarBtn}
          image={Entrada} 
          nome={'Entradas'}/>

          <Botao event={() => handleFiltrarPratos('Massas')} 
          acender={botaoClicado === 'Massas' ? styles.acenderBtn : styles.apagarBtn} 
          image={Massas} 
          nome={`Massas`}/>

          <Botao event={() => handleFiltrarPratos('Carnes')}  
          acender={botaoClicado === 'Carnes' ? styles.acenderBtn : styles.apagarBtn}
          image={Carnes} 
          nome={'Carnes'}/>

          <Botao event={() => handleFiltrarPratos('Bebidas')}  
          acender={botaoClicado === 'Bebidas' ? styles.acenderBtn : styles.apagarBtn}
          image={Bebidas} 
          nome={'Bebidas'}/>

          <Botao event={() => handleFiltrarPratos('Saladas')}  
          acender={botaoClicado === 'Saladas' ? styles.acenderBtn : styles.apagarBtn}
          image={Saladas} 
          nome={'Saladas'}/>

          <Botao event={() => handleFiltrarPratos('Sobremesas')}  
          acender={botaoClicado === 'Sobremesas' ? styles.acenderBtn : styles.apagarBtn}
          image={Sobremesas} 
          nome={'Sobremesas'}/>

          <div className={styles.container_input}>  
            <Image src={Lupa} alt='ícone'/>
            <input
            type='text'
            value={textoBusca}
            placeholder='Pesquise aqui um dos pratos do nosso cardápio.'
            onChange={(ev) => handleBuscarPrato(ev.target.value)}/>
          </div>
        </Categorias>

        <SecaoCardapio>
          {listaPratos.map((produto, index) =>(
            <Card key={index} alt={'Imagem'} image={produto.imagem}
            title={produto.nome} categoria={produto.categoria} descricao={produto.descricao} 
            valor={`R$ ${produto.preco.toLocaleString('pt-br', {minimumFractionDigits: 2})}`} />
          ))}
        </SecaoCardapio>
      </main>
    </>
  );
}
