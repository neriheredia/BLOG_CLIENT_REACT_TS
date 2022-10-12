import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from '@/pages';
import { RoutesWhitNotFound } from '@/utilities';

export function App() {
  return (
    <BrowserRouter>
      <RoutesWhitNotFound>
        <Route path="/" element={<Home />} />
      </RoutesWhitNotFound>
    </BrowserRouter>
  );
}
