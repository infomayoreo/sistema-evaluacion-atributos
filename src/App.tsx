import { Provider } from 'react-redux';
import {useState} from "react"
import { store } from './redux/store';
import { AppRouter } from './routers/AppRouter';
import './assets/sass/App.scss';

export const App = (): JSX.Element => {
	const [token, setToken] = useState("");
	// console.log("en index", token)
	console.log(store.getState())
	return (
		<Provider store={ store }>
			<AppRouter
				token={token}
				setToken={setToken}
			/>
		</Provider>
	);
}
