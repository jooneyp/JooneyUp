import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import Login from './Login'
import CardList from './CardList'
import NotFound from './NotFound'
import {store, history} from './store/global'

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={CardList}/>
				<Route path="/login" component={Login}/>
				<Route path="*" component={NotFound}/>
			</Route>
		</Router>
	</Provider>,
  document.getElementById('root')
);
