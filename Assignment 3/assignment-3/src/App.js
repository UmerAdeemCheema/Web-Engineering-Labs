import './App.css';
import Navigation from './components/navigation';
import CoverPic from './components/coverpic';
import HeadingHospital from './components/headingHospital';
import Footer from './components/footer';
import Popup from './components/popup';
import DepartmentORDoctor from './components/departmentORdoctor';
import {useState} from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="App">
      <Navigation  />
      <CoverPic />
      <HeadingHospital setButtonTrigger={setButtonPopup}/>
      <DepartmentORDoctor />
      <Footer />

      <Popup trigger={buttonPopup} setButtonTrigger={setButtonPopup}/>
    </div>
  );
}

export default App;
