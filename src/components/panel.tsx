import * as React from 'react'
import {Parametro} from '../model/parametro'
import {product} from '../api/productoCartesiano'

interface Props {
    
}


export const Panel :React.StatelessComponent<Props>= (props) => {

    const[paramValues, setParamValues] = React.useState([]) 
    const[paramValue, setParamValue] = React.useState('')
    const[paramName, setParamName] = React.useState('')
    const[parametros, setParametros] = React.useState<Parametro[]>([])
    const[testCases, setTestCases] = React.useState([])
    

    const onValueSubmit = () => {
        if (!paramValues.includes(paramValue) && paramValue !== '') {
            setParamValues([
                ...paramValues,
                paramValue
            ])
            setParamValue('')
        }
   }

   const onGenerateSubmit = () => {
       let listParametros = []

       parametros.forEach(parametro => {
           listParametros.push(parametro.values)
       })
       const result = product(...listParametros)

       console.log(result)

       setTestCases(result)
   }

   const onParamSubmit = () => {
        setParamName(paramName)
        
        setParametros([
            ...parametros,
            {
                name: paramName,
                values: paramValues
            }
        ])
        setParamValues([])
        setParamName('')
    }

    const onNameChange =(event: React.ChangeEvent<HTMLInputElement>) => {
        setParamName(event.target.value)
    }

    const onValueChange =(event: React.ChangeEvent<HTMLInputElement>) => {
        setParamValue(event.target.value)
    }

    return (
        <>
            <label>Parámetro:</label>
            <input onChange={onNameChange} value={paramName} />
            <label>Valor:</label>
            <input onChange={onValueChange} value={paramValue} />
            <button onClick={onValueSubmit}>Añadir valor</button>
            <div>
                {paramValues.map(value=> 
                    (<li key={value}>{value}</li>)
                    )}
            </div>
            <button onClick={onParamSubmit}>Añadir Parámetro</button>
            <div>
                {parametros.map(parametro=> 
                    (<li key={parametro.name}>{parametro.name}: {parametro.values.map(value=>(
                        <div key={value}>{value}</div>
                    ))}</li>)
                    )}
            </div>
            <button onClick={onGenerateSubmit}>Generar casos</button>
            

            <table>
                <thead>
                    <tr key='header'>
                        {
                            parametros.map(param => (
                                <th>{param.name}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                {
                    testCases.map(testCase => (
                        <tr key={testCase}>
                            {testCase.forEach(valor=> (
                                <td>{valor}</td>
                            ))}
                        </tr>
                    ))
                }
                </tbody>
            </table>



        </>
    )
}