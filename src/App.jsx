import './App.css'
import AppBarComp from './AppBarComp'
import PictureGrid from './Picturegrid'


function App() {
document.title = "BST Photography";

const images = [
  { src: './photo_6005941701492986367_y.jpg' },
  { src: './photo_5956209519258355156_y.jpg' },
  { src: './photo_5884187955701074819_y.jpg' },
  { src: './photo_6005941701492986374_y.jpg' },
  { src: './photo_5956209519258355161_y.jpg' },
  { src: './photo_5830001630387488125_y.jpg' },
  { src: './photo_6005941701492986377_y.jpg' },
  { src: './photo_6005941701492986373_y.jpg' },
  { src: './photo_5830001630387488130_y.jpg' },
  { src: './photo_5956209519258355153_y.jpg' },
  { src: './photo_6005941701492986368_y.jpg' },
  { src: './photo_5830001630387488118_y.jpg' },
  { src: './photo_5861732732806219911_y.jpg' },
  { src: './photo_6005941701492986375_y.jpg' },
  { src: './photo_5830001630387488139_y.jpg' },
  { src: './photo_5830001630387488128_y.jpg' },
  { src: './photo_5861732732806219912_y.jpg' },
  { src: './photo_6005941701492986378_y.jpg' },
  { src: './photo_6012711162656966771_y.jpg' },
  { src: './photo_5830001630387488124_y.jpg' },
  { src: './photo_5830001630387488117_y.jpg' },
  { src: './photo_5830001630387488129_y.jpg' },
  { src: './photo_5861732732806219914_y.jpg' },
  { src: './photo_5830001630387488134_y.jpg' },
  { src: './photo_6005941701492986366_y.jpg' },
  { src: './photo_5956209519258355158_y.jpg' },
  { src: './photo_6005941701492986379_y.jpg' },
  { src: './photo_6005941701492986376_y.jpg' },
  { src: './photo_5861732732806219915_y.jpg' },
  { src: './photo_5830001630387488132_y.jpg' },
  { src: './photo_5830001630387488116_y.jpg' },
  { src: './photo_5830001630387488123_y.jpg' },
  { src: './photo_5830001630387488120_y.jpg' },
  { src: './photo_5830001630387488137_y.jpg' },
  { src: './photo_6005941701492986369_y.jpg' },
  { src: './photo_5830001630387488138_y.jpg' },
  { src: './photo_5830001630387488126_y.jpg' },
  { src: './photo_5956209519258355152_y.jpg' },
  { src: './photo_5906781588212008117_y.jpg' },
  { src: './photo_5830001630387488121_y.jpg' },
  { src: './photo_5884187955701074822_y.jpg' },
  { src: './photo_5830001630387488131_y.jpg' },
  { src: './photo_5897756423109068439_y.jpg' },
  { src: './photo_5830001630387488119_y.jpg' },
  { src: './photo_5830001630387488113_y.jpg' },
  { src: './photo_6012711162656966770_y.jpg' },
  { src: './photo_5956209519258355157_y.jpg' },
  { src: './photo_5956209519258355159_y.jpg' },
  { src: './photo_5861732732806219910_y.jpg' },
  { src: './photo_5956209519258355160_y.jpg' },
  { src: './photo_5830001630387488114_y.jpg' },
  { src: './photo_5956209519258355154_y.jpg' },
  { src: './photo_5830001630387488140_y.jpg' },
  { src: './photo_5956209519258355155_y.jpg' },
  { src: './photo_5830001630387488127_y.jpg' },
  { src: './photo_5830001630387488122_y.jpg' },
  { src: './photo_5884187955701074817_y.jpg' },
  { src: './photo_5884187955701074818_y.jpg' },
  { src: './photo_5884187955701074816_y.jpg' },
  { src: './photo_5861732732806219909_y.jpg' },
  { src: './photo_5884187955701074815_y.jpg' },
  { src: './photo_5830001630387488115_y.jpg' },
  { src: './photo_6012711162656966772_y.jpg' }
];



return (
  <>
    <AppBarComp></AppBarComp>
     <h1>
        Welcome to my portfolio
    </h1>
    <div className='container'>
      <div className='Intro'>
    <h2>
          Hi, I'm Baldeep Singh Taluja, a high school student at Cambridge International School, Dubai (Class of 2025) with a strong passion for software development, data analysis, and creative tech projects. Photography has been my passion since I was 10, capturing the world through my lens. My journey started with a simple point-and-shoot camera, and over the years, it has grown into a hobby. I specialize in landmark and vehicle photography.
    </h2>

    </div>
    
    </div>
      <div className='Gallery'>
        <h2>
          Gallery
        </h2>
        <PictureGrid images={images} />
      </div>
    </>
  )
}

export default App
