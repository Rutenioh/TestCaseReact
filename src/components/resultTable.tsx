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
			<table className='displayNone'>
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
							<TestCaseRow testCase={testCase} />
						))
					}
				</tbody>
			</table>
		</>
	)

}