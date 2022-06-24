import { useParams } from 'react-router-dom';
import { getInvoice } from '../data';

export default function Invoice() {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10)); 
    return (
    <main style={{ padding: '1rem' }}>
        <h2>Total due: {invoice.amount}</h2>
        <p>
            {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
        <Link to="/shoes?brand=nike">Nike</Link>
        <Link to="/shoes?brand=vans">Vans</Link>
    </main>
    );
  }
  function BrandLink({ brand, ...props }) {
    let [params] = useSearchParams();
    let isActive = params.getAll("brand").includes(brand);
    return (
      <Link
        style={{ color: isActive ? "red" : "" }}
        to={`/shoes?brand=${brand}`}
        {...props}
      />
    );
  }

  //parseInt around the param its very common for your data lookups to use a number type, but URL params are always string.
  