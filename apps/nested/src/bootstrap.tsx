import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import NestedApp from './NestedApp';

const container = document.getElementById('app');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <NestedApp />
  </BrowserRouter>
);
