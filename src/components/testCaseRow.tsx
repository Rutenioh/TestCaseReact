import * as React from 'react';

interface Props {
	testCase: any[]
	onDeleteRow: (index: number) => void
}

export const TestCaseRow: React.StatelessComponent<Props> = (props) => {

		const deleteRow = (index) => {
			props.onDeleteRow(index)
		}

    return (
		<>
			<tr>
				<td><img onClick={deleteRow} src={require('../img/delete-icon.png')} style={{ maxWidth: '1rem' }}></img></td>
				{props.testCase.map(value => (
				<td>{value}</td>
			))}
			</tr>
		</>
	)
}