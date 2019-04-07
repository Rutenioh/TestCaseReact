import * as React from 'react'
import { Parametro } from '../model/parametro'
import { product } from '../api/productoCartesiano'
import { ResultTable } from './resultTable';

interface Props {

}

export const Panel: React.StatelessComponent<Props> = (props) => {

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
        parametros.forEach(parametro => {
            listParametros.push(parametro.values)
            cabeceras.push(parametro.name)
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

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParamName(event.target.value)
    }

    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParamValue(event.target.value)
    }

    return (
        <>
            <div id="panel">
                <span>
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
                            (<li key={parametro.name}>{parametro.name}: {parametro.values.map(value => (
                                <div key={value}>{value}</div>
                            ))}</li>)
                        )}
                    </span>
                </div>
                <button onClick={onGenerateSubmit}>Generar casos</button>
                <ResultTable cabeceras={cabeceras} testCases={testCases}/>

            </div>
        </>
    )
}