import * as React from 'react'

interface Props {
    
}

export const Panel :React.StatelessComponent<Props>= (props) => {

    const[paramValues, setParamValues] = React.useState([]) 
    const[paramValue, setParamValue] = React.useState('')
    const[paramName, setParamName] = React.useState('')

    const onValueSubmit = () => {
        if (!paramValues.includes(paramValue) && paramValue !== '') {
            setParamValues([
                ...paramValues,
                paramValue
            ])
        }
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
        </>
    )
}