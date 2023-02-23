import React, { Suspense, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppModal } from 'shared/ui/AppModal/AppModal';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app app-main', {}, [theme])}>
            <Suspense fallback="">
                <Sidebar />
                <main className="content-page">
                    <Navbar />
                    <AppRouter />
                </main>
            </Suspense>
        </div>
    );
};

export default App;
