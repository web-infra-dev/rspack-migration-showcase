import React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

export default function EmptyRoute() {
  const context = useOutletContext();
  return <Outlet context={context} />;
}
