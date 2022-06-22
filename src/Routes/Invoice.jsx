export default function Invoice() {
    return <h2>Invoice #???</h2>; //normalmente o '???' seria prop:<Invoice invoiceId='123' />, mas voce não controla essa informação porque isso vem do URL.
  }