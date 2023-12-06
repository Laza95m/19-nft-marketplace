import { Route, Routes } from 'react-router-dom';
import { myContext } from '../context/Context';

const RouterPage = () => {
  const { publicPages } = myContext();

  return (
    <>
      <main>
        <Routes>
          {publicPages.map(({ path, element }, i) => (
            <Route key={i} path={path} element={element} />
          ))}
        </Routes>
      </main>
    </>
  );
};

export default RouterPage;
