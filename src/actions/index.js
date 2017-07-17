import { SIGNED_IN } from '../constants'


export function LoginUser(email) {
    const action = {
        type:SIGNED_IN,
        email
    }
 return action;
}


