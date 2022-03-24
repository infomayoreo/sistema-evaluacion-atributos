import { responseEncoding } from 'axios';
import { ThunkDispatch } from 'redux-thunk';
import { ReduxAction, User } from '../../interfaces';
import { types } from '../types';


export const startLoginEmailPassword = (email: string, password: string) => {
    return async (dispatch: ThunkDispatch<{}, {}, ReduxAction>): Promise<void> => {

        let userTemp: User;

        try {
            // const { data: { user, token } } = await authService.login(email, password)

            // TODO: Eliminar este user al crear authSerice.login
            const user = {
                uid: 'soy_uid',
                name: 'soy_displayName',
                email: 'soy_email',
            }
            console.log(user);

            userTemp = {
                uid: user.uid,
                displayName: user.name,
                email: user.email,
            }

            // TODO: Colocal token correcto
            localStorage.setItem('access_token', 'soy_token');
            dispatch( loginAction(userTemp) );

        } catch (error) {
            console.log(error);
        }

    };
}

export const startLogout = () => {
    return async(dispatch: ThunkDispatch<{}, {}, ReduxAction>): Promise<void> => {

        console.log('startLogout')
        try {
            localStorage.removeItem('access_token');
            dispatch( logoutAction() )

        } catch(error) {
            console.log(error);
        }
    }
}

export const startGetAuthState = () => {
    return async(dispatch: ThunkDispatch<{}, {}, ReduxAction>): Promise<void> => {

        try {
            
            // const { data: { uid, email, name:displayName } } = await authService.getAuthState();
            // dispatch( getAuthStateAction({ uid, email, displayName }) )

        } catch(error) {
            console.log(error);
        }
    }
};


const loginAction = (user: User): ReduxAction => ({
    type: types.authLogin,
    payload: user
});
const loginActionGoogle = (token: string ): ReduxAction => ({
    type: types.authLoginGoogle,
    payload: token
});

const logoutAction = (): ReduxAction => ({
    type: types.authLogout
});

const getAuthStateAction = (user: User): ReduxAction => ({
    type: types.authGetState,
    payload: user
});

export const startLoginGoogle =  (response: any) => {
    // const API = "127.0.0.1:3001/api/v1/google-login";
    return async(dispatch: ThunkDispatch<{}, {}, ReduxAction>) => { 
        // console.log(response)
        let cabeceras = new Headers();
		cabeceras.append("google-id-token", response.credential)
	    const sendToken = await fetch("http://localhost:3001/api/v1/google-login", {
		method: "POST",
		headers: cabeceras,
		redirect: "follow",
	                        })
    const datos = await sendToken.json();
    console.log(datos)
    const status = datos.appStatusCode
    const token = datos.data.token
    console.log(token)
    
    if(status != 0) {
        console.log("Error de validacion")
        return;
    }
    let userTemp: User;
    const user = {
        uid: 'soy_uid',
        name: 'soy_displayName',
        email: 'soy_email',
    }
    // console.log(user);

     userTemp = {
        uid: user.uid,
        displayName: user.name,
        email: user.email,
    }
    
    dispatch(loginActionGoogle(token))


    } 


    }
  

    


