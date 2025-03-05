import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/route-config/route-config";
import { PageLoader } from "widgets/page-loader/page-loader";

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<section className="page-wrapp">{element}</section>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
