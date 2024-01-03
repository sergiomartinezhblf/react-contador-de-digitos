import React from 'react'
import { useState, useEffect } from 'react'
import Tabla_conteo from './tabla_conteo'
import '../index.css';
import Swal from 'sweetalert2'

function Formulario() {

  const [cadena, setCadena] = useState("")
  const [numeros,setNumeros] = useState({
    digito0: 0,
    digito1: 0,
    digito2: 0,
    digito3: 0,
    digito4: 0,
    digito5: 0,
    digito6: 0,
    digito7: 0,
    digito8: 0,
    digito9: 0,
    cero: 0,
    uno: 0,
    dos: 0,
    tres: 0,
    cuatro: 0,
    cinco: 0,
    seis: 0,
    siete: 0,
    ocho: 0,
    nueve: 0
  }) 
  const [suma,setSuma] = useState(0)
  const [valido,setValido] = useState(true)

useEffect(()=>{
   
    //matchall para contabilizar el numero de veces que se repide cada número en la cadena
    const arraydigito0= [...cadena.matchAll("0")]
    if(numeros.digito0!=arraydigito0.length) {setNumeros({
    ...numeros, digito0: arraydigito0.length
    })} 
    const arraydigito1= [...cadena.matchAll("1")]
    if(numeros.digito1!=arraydigito1.length) {setNumeros({
    ...numeros, digito1: arraydigito1.length
    })}
    const arraydigito2= [...cadena.matchAll("2")]
    if(numeros.digito2!=arraydigito2.length) {setNumeros({
    ...numeros, digito2: arraydigito2.length
    })}
    const arraydigito3= [...cadena.matchAll("3")]
    if(numeros.digito3!=arraydigito3.length) {setNumeros({
    ...numeros, digito3: arraydigito3.length
    })}
    const arraydigito4= [...cadena.matchAll("4")]
    if(numeros.digito4!=arraydigito4.length) {setNumeros({
    ...numeros, digito4: arraydigito4.length
    })} 
    const arraydigito5= [...cadena.matchAll("5")]
    if(numeros.digito5!=arraydigito5.length) {setNumeros({
    ...numeros, digito5: arraydigito5.length
    })} 
    const arraydigito6= [...cadena.matchAll("6")]
    if(numeros.digito6!=arraydigito6.length) {setNumeros({
    ...numeros, digito6: arraydigito6.length
    })}
    const arraydigito7= [...cadena.matchAll("7")]
    if(numeros.digito7!=arraydigito7.length) {setNumeros({
    ...numeros, digito7: arraydigito7.length
    })}
    const arraydigito8= [...cadena.matchAll("8")]
    if(numeros.digito8!=arraydigito8.length) {setNumeros({
    ...numeros, digito8: arraydigito8.length
    })}
    const arraydigito9= [...cadena.matchAll("9")]
    if(numeros.digito9!=arraydigito9.length) {setNumeros({
    ...numeros, digito9: arraydigito9.length
    })} 
    const regexpcero = RegExp("[csz]ero", "gi")
    const arraycero= [...cadena.matchAll(regexpcero)]
    if(numeros.cero!=arraycero.length) {setNumeros({
    ...numeros, cero: arraycero.length
    })} 
    const regexpuno = RegExp("uno", "gi")
    const arrayuno= [...cadena.matchAll(regexpuno)]
    if(numeros.uno!=arrayuno.length) {setNumeros({
    ...numeros, uno: arrayuno.length
    })}
    const regexpdos = RegExp("do[sz]", "gi")
    const arraydos= [...cadena.matchAll(regexpdos)]
    if(numeros.dos!=arraydos.length) {setNumeros({
    ...numeros, dos: arraydos.length
    })}
    const regexptres = RegExp("tre[sz]", "gi")
    const arraytres= [...cadena.matchAll(regexptres)]
    if(numeros.tres!=arraytres.length) {setNumeros({
    ...numeros, tres: arraytres.length
    })}
    const regexpcuatro = RegExp("[cqk]uatro", "gi")
    const arraycuatro= [...cadena.matchAll(regexpcuatro)]
    if(numeros.cuatro!=arraycuatro.length) {setNumeros({
    ...numeros, cuatro: arraycuatro.length
    })} 
    const regexpcinco = RegExp("[csz]in[ck]o", "gi")
    const arraycinco= [...cadena.matchAll(regexpcinco)]
    if(numeros.cinco!=arraycinco.length) {setNumeros({
    ...numeros, cinco: arraycinco.length
    })} 
    const regexpseis = RegExp("[szc]ei[sz]", "gi")
    const arrayseis= [...cadena.matchAll(regexpseis)]
    if(numeros.seis!=arrayseis.length) {setNumeros({
    ...numeros, seis: arrayseis.length
    })}
    const regexpsiete = RegExp("[szc]iete", "gi")
    const arraysiete= [...cadena.matchAll(regexpsiete)]
    if(numeros.siete!=arraysiete.length) {setNumeros({
    ...numeros, siete: arraysiete.length
    })}
    const regexpocho = RegExp("o[csx]ho", "gi")
    const arrayocho= [...cadena.matchAll(regexpocho)]
    if(numeros.ocho!=arrayocho.length) {setNumeros({
    ...numeros, ocho: arrayocho.length
    })}
    const regexpnueve = RegExp("nue[vb]e", "gi")
    const arraynueve= [...cadena.matchAll(regexpnueve)]
    if(numeros.nueve!=arraynueve.length) {setNumeros({
    ...numeros, nueve: arraynueve.length
    })} 
    
    },[cadena])


  useEffect(()=>{
    const sum =  Object.values(numeros).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
     setSuma(sum)
     suma>7? setValido(false): setValido(true)
  })

  const swalalert =()=>{
    Swal.fire({
      icon: "success",
      title: "El mensaje ingresado es valido!",
      text: `Total de números ${suma}`,
      showConfirmButton: false,
      timer: 2000
    })
  }

  
     
  return (
    <>
    <section className='row'>
      <div className='col-12 col-md-6'>
      <form className='p-3'onSubmit={(e)=>{
            e.preventDefault()
            setCadena(e.target.textarea.value)
            swalalert()
            
    }}>
        <label className="mb-3 fs-3">Ingresa el mensaje:
        </label>
        <textarea className="form-control" name="textarea" id="textarea" rows="10" style={{resize: "none", backgroundColor: valido? "white":"LightCoral"}} value={cadena} onChange={e=>setCadena(e.target.value)}/>
        <div className="w-100 d-flex justify-content-center">
        <input className="btn btn-success mt-3" type="submit" value="Enviar" disabled={(suma>7 ? true: false)}/>
        </div>
    </form>
      </div>
      <div className='col-12 col-md-6 px-4'>
      <Tabla_conteo numeros={numeros} suma={suma}/>
      </div>
    </section>
    </>
  )
}

export default Formulario