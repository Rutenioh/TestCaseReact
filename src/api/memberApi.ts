import {Member} from '../model/member'
import Axios from 'axios'

const githubURL = 'https://api.github.com/orgs/lemoncode/members'

export const getMembersCollection = (): Promise<Member[]> => {

  const promise = new Promise<Member[]>((resolve, reject) => {
    try {
      Axios.get<Member[]>(githubURL).then(response => resolve(response.data))
    } catch(exception) {
      reject(exception)
    }
  })
  
  
    return promise;
  
  };