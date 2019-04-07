import * as React from 'react'
import { Parametro } from '../model/parametro'

interface Props {
	cabeceras: Parametro[]
	testCases: any[]
}

export const ResultTable: React.StatelessComponent<Props> = (props :Props) => {

	return (
		<>
			<table>
				<thead>
					<tr>
						{
							props.cabeceras.map(cabecera => (
								<th>{cabecera}</th>
							))
						}
					</tr>
				</thead>
				<tbody>
					{
						props.testCases.map(testCase => (
							<tr>{testCase.map(value => (
								<td>{value}</td>
							))}</tr>
						))
					}
				</tbody>
			</table>
		</>
	)

}