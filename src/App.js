import './App.css';

import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Vision from './components/vision/vision';
import Roadmap from './components/roadmap/roadmap';
import Team from './components/team/team';
import Community from './components/community/community';
import Footer from './components/footer/footer';
// import Notify from './components/notify/notify';
import Faq from './components/faq/faq';
function App() {
  return (
    <div className="w-screen">
      <Navbar/>
      <Header/>
      <Vision/>
      <Roadmap/>
      <Faq/>
      <Team/>
      <Community/>
      <Footer/>
      {/* <Notify/> */}
    </div>
  );
}

export default App;
