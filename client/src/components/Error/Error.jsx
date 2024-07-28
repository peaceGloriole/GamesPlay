import { Link } from 'react-router-dom';

export default function Error() {
    return (
      <>
            <p>404</p>
            <h1>Page not found</h1>
            <p>Sorry, we couldn’t find the page you’re looking for.</p>
              <Link to={`/`}>
                Go back to home page
              </Link>
              <Link to={`/login`} >
                Try to login again
              </Link>
      </>
    );
  }
  
//TODO : implement better Error page