import { Link } from "react-router-dom";
import { getInvoices } from "../data";



export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
    </div>
  ); //adding some styles to specific Invoices and 
}//importing the data of Data.jsx = the Invoices is a component for style and... // Data is the component for data.
<Routes>
  <Route path="/" element={<App />}>
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />}>
      <Route path=":invoiceId" element={<Invoice />} />
    </Route>
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Route>
</Routes> //just created a route that matches urls like '/invoices/2005' and '/invoices'1999.
//the :invoiceId part of the path is a 'URL param', meaning it can match any value as long as the pattern is the same.
//The <Route> adds a second layer of route nesting when it matches:<App><Invoices><Invoice /> </Invoices></App>. Because the <Route> is nested the UI will be nested too.