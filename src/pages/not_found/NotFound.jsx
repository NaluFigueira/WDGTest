import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import Button from '../../components/Button/Button';

// import { Container } from './styles';

function NotFound() {
  const history = useHistory();

  function goToHomePage() {
      history.push("/login");
  }

  return (
      <Container>
          <div>
            <h1>
                404: Page not found
            </h1>
            <h2>
                We couldn't find what you were looking for.
            </h2>
            <Button title={"Go to home page"} onClick={goToHomePage} type={"link-button"} />
          </div>
      </Container>
  );
}

export default NotFound;