import data from '../data.json'
import Summary from './compoents/Summary'
import Result from './compoents/Result'

const App = () => {
  return (

   <div id="mainContainer" className='font-Hanken flex items-center justify-center h-screen'> 

      <div id='container' className='grid grid-cols-1 mobile:grid-cols-2 gap-3 shadow-xl shadow-[hsl(221,100%,96%)] rounded-3xl w-[70%] h-[50%] bg-white'>

        <div id='' className='rounded-3xl bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)]  w-auto h-auto text-center p-6'>
          <Result />
        </div>

        <div className='w-auto h-auto p-6'>
          <Summary data = {data}/>
        </div>

      </div>  

   </div>


  )
}

export default App