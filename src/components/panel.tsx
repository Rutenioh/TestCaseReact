import * as React from 'react'
import { Parametro } from '../model/parametro'
import { product } from '../api/productoCartesiano'
import { ResultTable } from './resultTable';

export const Panel: React.StatelessComponent = () => {

    const [paramValues, setParamValues] = React.useState([])
    const [paramValue, setParamValue] = React.useState('')
    const [paramName, setParamName] = React.useState('')
    const [parametros, setParametros] = React.useState<Parametro[]>([])
    const [testCases, setTestCases] = React.useState([])
    const [cabeceras, setCabeceras] = React.useState([])


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
        if (parametros.length > 0) {

            if (cabeceras.length == 0) {
                cabeceras.push('Eliminar caso')
            }
            parametros.forEach(parametro => {
                listParametros.push(parametro.values)

                if (!cabeceras.includes(parametro.name)) {
                    cabeceras.push(parametro.name)
                }
            })

            const result = product(...listParametros)

            console.log(result)
            setTestCases(result)
        }
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

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParamName(event.target.value)
    }

    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParamValue(event.target.value)
    }

    return (
        <>
            <div id="panel">
                <span className="add_param">
                    <label>Parámetro:</label>
                    <input onChange={onNameChange} value={paramName} />
                    <label>Valor:</label>
                    <input onChange={onValueChange} value={paramValue} />
                    <button onClick={onValueSubmit}>Añadir valor</button>
                </span>
                <span>
                    {paramValues.map(value =>
                        (<li key={value}>{value}</li>)
                    )}
                </span>
                <div id="param">
                    <button onClick={onParamSubmit}>Añadir Parámetro</button>
                    <span>
                        {parametros.map(parametro => 
                            (<div className="parametro"> {parametro.name}: {parametro.values.map(value => (
                                <span className="valor_parametro">{value}</span>
                            ))}</div>)
                        )}
                    </span>
                </div>
                <button onClick={onGenerateSubmit}>Generar casos</button>
                <ResultTable cabeceras={cabeceras} testCases={testCases} />

            </div>
        </>
    )
}