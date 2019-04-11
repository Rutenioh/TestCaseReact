import * as React from 'react'
import { Parametro } from '../model/parametro'
import { TestCaseRow } from './testCaseRow';

interface Props {
	cabeceras: string[]
	testCases: any[]
}

export const ResultTable: React.StatelessComponent<Props> = (props: Props) => {

	const deleteRow = (index :number) => {
		props.testCases.splice(index, 1);
	}

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
							<TestCaseRow onDeleteRow={deleteRow} testCase={testCase} />
						))
					}
				</tbody>
			</table>
		</>
	)

}