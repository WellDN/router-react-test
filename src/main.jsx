import ReactDOM from "react-dom/client";
//import { BrowserRouter } from "react-router-dom";
//import App from "./App";

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import Expenses from './Routes/Expenses';
import Invoices from './Routes/Invoices';


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>  
    <Route path="Expenses" element={<Expenses />} />
    <Route path="Invoices" element={<Invoices />} />
    <Route
    path='*'
    element={
      <main style={{ padding: '1rem' }}>
        <p>There's nothing here!</p>
      </main>
    }
    />
    </Route>
    </Routes>
  </BrowserRouter>
);  //Notice at '/' it renders <App>. at '/invoices' it renders <Invoices>.
//The "*" has special meaning here. It will match only when no other routes do.
