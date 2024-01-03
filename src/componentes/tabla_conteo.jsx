import React, { useState } from 'react'
import '../index.css';



function Tabla_conteo({numeros,suma}) {

  

  return (
        <section className='row'>
        <div className='col'>
        <table>
        <thead>
          <tr>
          <th>#</th>
          <th>Veces</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>Digito 0:</td>
          <td>{numeros.digito0}</td>
          </tr>
          <tr>
          <td>Digito 1:</td>
          <td>{numeros.digito1}</td>
          </tr>
          <tr>
          <td>Digito 2:</td>
          <td>{numeros.digito2}</td>
          </tr>
          <tr>
          <td>Digito 3:</td>
          <td>{numeros.digito3}</td>
          </tr>
          <tr>
          <td>Digito 4:</td>
          <td>{numeros.digito4}</td>
          </tr>
          <tr>
          <td>Digito 5:</td>
          <td>{numeros.digito5}</td>
          </tr>
          <tr>
          <td>Digito 6:</td>
          <td>{numeros.digito6}</td>
          </tr>
          <tr>
          <td>Digito 7:</td>
          <td>{numeros.digito7}</td>
          </tr>
          <tr>
          <td>Digito 8:</td>
          <td>{numeros.digito8}</td>
          </tr>
          <tr>
          <td>Digito 9:</td>
          <td>{numeros.digito9}</td>
          </tr>
        </tbody>
      </table>
        </div>
        <div className='col'>
        <table>
        <thead>
          <tr>
          <th>#</th>
          <th>Veces</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>Cero:</td>
          <td>{numeros.cero}</td>
          </tr>
          <tr>
          <td>Uno:</td>
          <td>{numeros.uno}</td>
          </tr>
          <tr>
          <td>Dos:</td>
          <td>{numeros.dos}</td>
          </tr>
          <tr>
          <td>Tres:</td>
          <td>{numeros.tres}</td>
          </tr>
          <tr>
          <td>Cuatro:</td>
          <td>{numeros.cuatro}</td>
          </tr>
          <tr>
          <td>Cinco:</td>
          <td>{numeros.cinco}</td>
          </tr>
          <tr>
          <td>Seis:</td>
          <td>{numeros.seis}</td>
          </tr>
          <tr>
          <td>Siete:</td>
          <td>{numeros.siete}</td>
          </tr>
          <tr>
          <td>Ocho:</td>
          <td>{numeros.ocho}</td>
          </tr>
          <tr>
          <td>Nueve:</td>
          <td>{numeros.nueve}</td>
          </tr>
        </tbody>
        
      </table>
        </div>
        <section className='row pt-3 m-auto'>
          <div className={`${suma<=7 ? 'col-10  mnsje conteo_valido' : 'col-10 mnsje conteo_novalido'}`}>
          {<p>Total de números: {suma}</p>}
          </div>
        </section>
      </section>
    
  )
}

export default Tabla_conteo