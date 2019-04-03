import * as React from 'react';
import {Member} from '../model/member'

interface Props {
    member: Member
}


export const MemberRow:React.StatelessComponent<Props> = (props) => {
    return (
        <>
            <tr key={props.member.id}>
                <td>
                    <img src={props.member.avatar_url} style={{maxWidth: '10rem'}} />
                </td>
                <td><span>{props.member.id}</span></td>
                <td><span>{props.member.login}</span></td>
            </tr>
        </>
    )
}