import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./pages/Front/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
