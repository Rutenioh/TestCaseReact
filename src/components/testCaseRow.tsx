import * as React from 'react';

interface Props {
	testCase: any[]
}

export const TestCaseRow: React.StatelessComponent<Props> = (props) => {

    return (
		<>
			<tr>
				<td><img src={require('../img/delete-icon.png')} style={{ maxWidth: '1rem' }}></img></td>
				{props.testCase.map(value => (
				<td>{value}</td>
			))}
			</tr>
		</>
	)
}