import { BrowserRouter, Route } from 'react-router-dom';
import { RoutesWhitNotFound } from '@/utilities';
import { Layout } from '@/components';

export function App() {
  return (
    <BrowserRouter>
      <RoutesWhitNotFound>
        <Route path="/" element={<Layout />} />
      </RoutesWhitNotFound>
    </BrowserRouter>
  );
}
