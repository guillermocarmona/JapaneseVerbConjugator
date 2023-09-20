import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ConjForm from './components/ConjForm';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App bg-secondary">
      <Header />
      <ConjForm />
      <Footer />
    </div>
  );
}

export default App;
