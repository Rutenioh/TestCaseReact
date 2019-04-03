import * as React from 'react';
import {Member} from '../model/member'
import { getMembersCollection } from '../api/memberApi'
import { MemberRow } from './memberRow'

const useMembers = () => {
    const[members, setMembers] = React.useState<Member[]>([])
    const loadMembers = () => {
        getMembersCollection().then((memberCollection)=> {
            setMembers(memberCollection)
        })
    }
    return {members, loadMembers}
}

export const MemberTable = () => {
    const {members, loadMembers} = useMembers();
    React.useEffect(() => {
        loadMembers()
    }, []) //componentDidMount

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                {
                    members.map(member => (
                        <MemberRow key={member.id} member={member}/>
                    ))
                }
                </tbody>
            </table>


            
        </>
    )
}