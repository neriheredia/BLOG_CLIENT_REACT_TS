import { Route, Routes } from 'react-router-dom';
import { NotFound } from '@/pages';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const RoutesWhitNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesWhitNotFound;
