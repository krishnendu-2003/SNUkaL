import { useState } from 'react'
import './App.css'
import ass1 from './assets/ass1.docx'
import ass2 from './assets/ass2.docx'
import ass3 from './assets/ass3.docx'
import ass4 from './assets/ass4.pdf'
import ass5 from './assets/ass5.pdf'
import ass6 from './assets/ass6.pdf'
import ass7 from './assets/ass7.pdf'
import ass8 from './assets/ass8.pdf'
import ass9 from './assets/ass9.pdf'
import ass10 from './assets/ass10.pdf'
import ass11 from './assets/ass11.pdf'
import ass12 from './assets/ass12.pdf'
import ass14 from './assets/ass14.pdf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mainComponentHead'>
     <div className='mainComponent'>
     <div className='block'>
     <div className="ccard">
  <div className="content-row">
    <p>
    
a. CO2 Emission Dataset: fuel_consumption_dataset.csv <br></br>
b. The selling price of a used car.
    </p>
    <button><a href={ass1} download>
  Save
</a></button>
  </div>
</div>
      <div className="ccard">
  <div className="content-row">
    <p>
      Dataset: housing_price_dataset.csv
    </p>
    <button><a href={ass2} download>
  Save
</a></button>
  </div>
</div>
      <div className="ccard">
  <div className="content-row">
    <p>
   Dataset: salary_dataset.csv
    </p>
    <button><a href={ass3} download>Save</a></button>
  </div>
</div>
      <div className="ccard">
  <div className="content-row">
    <p>
    Dataset: china_gdp.csv
    </p>
    <button><a href={ass4} download>Save</a></button>
  </div>
</div>
<div className="ccard">
  <div className="content-row">
    <p>
    Dataset: samples_cancer.csv
    </p>
    <button><a href={ass5} download>Save</a></button>
  </div>
</div>
      </div>

      <div className='block'>
      <div className="ccard">
  <div className="content-row">
    <p>
    Dataset: teleCust.csv<br></br>
    Accuracy of KNN
    </p>
    <button><a href={ass6} download>Save</a></button>
  </div>
</div>
<div className="ccard">
  <div className="content-row">
    <p>
    Dataset: drug.csv<br></br>
    Accuracy of the decision tree
    </p>
    <button><a href={ass7} download>Save</a></button>
  </div>
</div>
<div className="ccard">
  <div className="content-row">
    <p>
    Dataset: diabetics.csv<br></br>
    Accuracy and F1 Score
    </p>
    <button><a href={ass8} download>Save</a></button>
  </div>
</div>
<div className="ccard">
  <div className="content-row">
    <p>
    Dataset: samples_cancer.csv<br></br>
    Kernal SVM, Metrices SVM<br></br> ROC curve comparison
    </p>
    <button><a href={ass9} download>Save</a></button>
  </div>
</div>
<div className="ccard">
  <div className="content-row">
    <p>
    Dataset: diabetics.csv<br></br>
    Accuracy, recall, precision, f1 score<br></br>
    HMC, ROC
    </p>
    
    <button><a href={ass10} download>Save</a></button>
  </div>
</div>
        
      </div>
     </div>
     <div className='mainComponent'>
     <div className='block'>
     <div className="ccard">
  <div className="content-row">
    <p>Design and train a network of <br></br>
    perceptrons that computes the functionality<br></br>
    of XOR.
    </p>
    <button><a href={ass11} download>
  Save
</a></button>
  </div>
</div>
<div className="ccard">
  <div className="content-row">
    <p>Dataset: iris.csv <br></br>
    Performance matrics, Observe weight<br></br>
    Loss curve and Accuracy curve
    </p>
    <button><a href={ass12} download>
  Save
</a></button>
  </div>
</div>
    <div className="ccard">
  <div className="content-row">
    <p>Hierarchical clustering<br></br>
    Agglomeritive algo, Divisive algo<br></br>
    Dendrogram
    </p>
    <button><a href={ass14} download>
  Save
</a></button>
  </div>
</div>
   

      </div>
     </div>
     </div>
    </>
  )
}

export default App
