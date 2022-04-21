import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/App';
import './styles/_dummy.scss';
import "./styles/_footer.scss";
import "./styles/_form.scss";
import "./styles/_header.scss";
import "./styles/_instructions.scss";
import "./styles/_letters.scss";
import "./styles/_loading.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
