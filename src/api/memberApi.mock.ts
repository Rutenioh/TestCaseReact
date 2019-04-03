import {Member} from '../model/member'

const githubURL = 'https://api.github.com/orgs/lemoncode/members'

export const getMembersCollection = (): Promise<Member[]> => {
    const promise = new Promise<Member[]>((resolve, reject) => {
      setTimeout(
        () =>
          resolve([
            {
              id: 1457912,
              login: "brauliodiez",
              avatar_url: "https://avatars.githubusercontent.com/u/1457912?v=3"
            },
            {
              id: 4374977,
              login: "Nasdan",
              avatar_url: "https://avatars.githubusercontent.com/u/4374977?v=3"
            },
            {
                id: 525509,
                login: "Rutenioh",
                avatar_url: "https://avatars.githubusercontent.com/u/525509?v=3"
              }
            
          ]),
        500
      );
    });
  
    return promise;
  };