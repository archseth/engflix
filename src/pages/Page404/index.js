import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import Button from '../../components/Button';

function Page404() {
  return (
    <PageDefault>

      pagina não encontrada!!

      <Button as={Link} className="ButtonLink" to="/">
        Home
      </Button>

    </PageDefault>
  );
}

export default Page404;
