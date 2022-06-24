import {
    QueryNavLink,
    Outlet,
    useSearchParams,
  } from "react-router-dom";
  import { getInvoices } from "../data";
  
  export default function Invoices() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();
  
    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          <input
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {invoices
            .filter((invoice) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((invoice) => (
              <QueryNavLink
                style={({ isActive }) => ({
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                })}
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
              >
                {invoice.name}
              </QueryNavLink>  //the issue is on the QueryNavLink/ to fix just NavLink all of them.
            ))}
        </nav>
        <Outlet />
      </div>
    );
  }



  
  
  
/*adding some styles to specific Invoices and 


importing the data of Data.jsx = the Invoices is a component for style and... // Data is the component for data.

just created a route that matches urls like '/invoices/2005' and '/invoices'1999.
the :invoiceId part of the path is a 'URL param', meaning it can match any value as long as the pattern is the same.
The <Route> adds a second layer of route nesting when it matches:<App><Invoices><Invoice /> </Invoices></App>. Because the <Route> is nested the UI will be nested too.

then  its made an Active Links wich means we swapped out Link for NavLink and this made:

 1. changed the style from a simples object to a function that returns an object to a function that returns an object.
2. changed the color of our link by looking at the isActive value that NavLink passed to our styling function.

Search Params: setSearchParams() is putting the ?filter=... search params in the URL and rerendering the router.
useSearchParams is now returning a URLSearchParams with "filter" as one of its values.
We set the value of the input to whatever is in the filter search param (it's just like useState but in the URLSearchParams instead!)
We filter our list of invoices based on the filter search param. */