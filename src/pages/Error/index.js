import React from 'react';
import { useParams } from "react-router-dom";
import { Header, Footer } from '../../component';

function Error() {
  const { errorCode } = useParams();
  return (
    <div>
      <Header />
      <p>Something went wrong!</p>
      { errorCode && <p>{`Error Code: ${errorCode}`}</p> }
      <Footer />
    </div>
  )
}

export default Error;