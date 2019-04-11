import * as React from 'react'
import { Parametro } from '../model/parametro'
import { TestCaseRow } from './testCaseRow';

interface Props {
	cabeceras: string[]
	testCases: any[]
}

export const ResultTable: React.StatelessComponent<Props> = (props: Props) => {

	return (
		<>
			<table className='result_table'>
				<thead className='headers'>
					<tr>
						{
							props.cabeceras.map(cabecera => (
								<th>{cabecera}</th>
							))
						}
					</tr>
				</thead>
				<tbody className='tbody'>
					{
						props.testCases.map(testCase => (
							<TestCaseRow testCase={testCase} />
						))
					}
				</tbody>
			</table>
		</>
	)

}