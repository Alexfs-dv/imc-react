import { useState } from 'react';
import './home.css';


export default function Home(){
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultadoImc, setResultadoImc] = useState('Vamos calcular seu IMC!') 
    const [imc, setImc] = useState('0.00')

    function calculaImc(e){

        e.preventDefault();
       
        let imc = (peso/(altura*altura)).toFixed(2)

        if(imc > 18.5 && imc < 25){
            setResultadoImc('Você está no peso ideal!')
        }
        else if(imc >= 25 && imc < 30){
            setResultadoImc('Você está acima do peso!')
        }
        else if(imc >= 30){
            setResultadoImc('Seu resultado indica obesidade!')
        }
        else{
            setResultadoImc('Você está abaixo do peso ideal!')
        }

        setImc(imc)
        setPeso('')
        setAltura('')
    }

    return(
        <div className='container'>
            <h1>Calcule seu IMC</h1>

            <form className='form' onSubmit={calculaImc}>
                <input 
                    required
                    type="number"
                    placeholder="Digite seu peso..." 
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)} 
                />
                <input 
                    required
                    type='number'
                    placeholder='Digite sua altura...'
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                />

                <button type='submit'>Calcular</button>
            </form>

            <div className='output'>
                <div className='output-items'>
                    <h2>{imc}</h2>
                    <p>Seu IMC</p>
                </div>
                <div className='texto-imc'>
                    <p>{resultadoImc}</p>
                </div>
            </div> 
        </div>
    )
}