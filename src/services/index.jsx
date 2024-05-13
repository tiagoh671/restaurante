import { produtos } from '../data/data-produtos'

export const retornaPratos = () =>{
    return produtos
  }

export const filtrarPrato = (categoria) =>{
  return produtos.filter((prato) => prato.categoria === categoria)
}

export const buscarPrato =(textoDigitado) =>{
  return produtos.filter((prato)=>
  prato.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
  prato.descricao.toLowerCase().includes(textoDigitado.toLowerCase())||
  prato.categoria.toLowerCase().includes(textoDigitado.toLowerCase()))
}