let invoices = [
    {
      name: "Santa Monica",
      number: 1995,
      amount: "$10,800",
      due: "12/05/1995",
    },
    {
      name: "Stankonia",
      number: 2000,
      amount: "$8,000",
      due: "10/31/2000",
    },
    {
      name: "Ocean Avenue",
      number: 2003,
      amount: "$9,500",
      due: "07/22/2003",
    },
    {
      name: "Tubthumper",
      number: 1997,
      amount: "$14,000",
      due: "09/01/1997",
    },
    {
      name: "Wide Open Spaces",
      number: 1998,
      amount: "$4,600",
      due: "01/27/1998",
    },
    { //Like useSearchParams, useLocation returns a location that tells us information about the URL. A location looks something like this:
      pathname: "/invoices",
      search: "?filter=sa",
      hash: "",
      state: null,
      key: "ae4cz2j"
    }
  ];
  
  
  export function getInvoices() {
    return invoices;
  } //this data gonna be in Invoices route

  export function getInvoice(number) {
    return invoices.find(
      (invoice) => invoice.number === number //this is making the due year appears
    );
  }