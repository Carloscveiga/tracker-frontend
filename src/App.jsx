import { Route, Switch } from "wouter";
import Homepage from './views/Homepage';
import Page404 from './components/Page404';
// import Header from './components/headerComponents/Header';
// import Footer from './components/footerComponents/Footer';

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Homepage} />
          <Route component={Page404} />
        </Switch>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App