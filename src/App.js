import Navbar from './components/Navbar';
import Herosec from './components/Herosec';
import Featuresec from './components/Featuresec';
import Testimony from './components/Testimony';
import People from './components/People';
import ContactForm from './components/footer';

function App() {
  return (
    <>
    <Navbar />
    <div className='max-w-7xl mx-auto pt-20 px-6'>
    <Herosec />
    <Featuresec />
    <Testimony />
    <People />
    <ContactForm/>
    </div>
    </>
  );
}

export default App;
