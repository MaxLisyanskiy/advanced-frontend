import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/theme-provider";

import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";
import { Suspense, useState } from "react";

import "./styles/index.scss";
import { Sidebar } from "widgets/sidebar";
import { Modal } from "shared/ui/Modal/Modal";

const App = () => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <Modal isOpen={isOpen} onClose={() => setIsOpen(true)}>
          1111111111111111111111
        </Modal>
        <div className="app-content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </main>
  );
};

export default App;
