import React from 'react';

import Header from '../Header/Header';

class App extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                <Header appName="Naming Contest" />
            </div>
        );
    }
}

export default App;