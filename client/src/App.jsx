import { adminRoute, clientRoute } from "./routes";
import AdminLayout from "./components/Layout/AdminLayout";
import ClientLayout from "./components/Layout/ClientLayout";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <>
      <Routes>
        {adminRoute.map((route, index) => {
          const Layout = route.layout === null ? Fragment : AdminLayout;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}

        {clientRoute.map((route, index) => {
          const Layout = route.layout === null ? Fragment : ClientLayout;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
