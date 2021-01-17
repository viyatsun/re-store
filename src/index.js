import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './service/bookstore-service';
import {BookstoreServiceProvider} from './components/'



ReactDOM.render(<App/>, document.getElementById('root'));
