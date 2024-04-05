import Navbar from './components/Navbar'
import Hero from './components/Hero'
import {SliderData} from './data/SliderData'
import GlobalStyle from './globalStyle'
import Feature1 from './components/contentFeature/Feature1'
import Feature2 from './components/contentFeature/Feature2'
import Feature3 from './components/contentFeature/Feature3'
import Feature4 from './components/contentFeature/Feature4'
import Feature5 from './components/contentFeature/Feature5'
import Feature6 from './components/contentFeature/Feature6'
import Feature7 from './components/contentFeature/Feature7'
import Feature8 from './components/contentFeature/Feature8'
import Feature9 from './components/contentFeature/Feature9'
import Feature10 from './components/contentFeature/Feature10'
import Feature11 from './components/contentFeature/Feature11'
import Feature12 from './components/contentFeature/Feature12'
import Feature13 from './components/contentFeature/Feature13'
import Feature14 from './components/contentFeature/Feature14'
import Feature15 from './components/contentFeature/Feature15'
import Feature16 from './components/contentFeature/Feature16'
import AOS from "aos"
import "aos/dist/aos.css" 

AOS.init();
const App = () => {

  return (
    <div className='app'>
      <GlobalStyle/>
      <Navbar/>
      <Hero slides={SliderData}/>
      <Feature1/>
      <Feature2/>
      <Feature3/>
      <Feature4/>
      <Feature5/>
      <Feature6/>
      <Feature7/>
      <Feature8/>
      <Feature9/>
      <Feature10/>
      <Feature11/>
      <Feature12/>
      <Feature13/>
      <Feature14/>
      <Feature15/>
      <Feature16/>
    </div>
  )
}

export default App;
