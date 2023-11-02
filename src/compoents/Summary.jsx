const Summary = ({data}) => {

  return (
    <div id="container" className='grid h-full items-center
    '>
      <h1 className='font-[700] text-[20px] text-left capitalize'>summary</h1>

      <div className="grid gap-3 ">
      {
      data.map((item) =>(
        <div key={item.id}>
         {
          item.category === 'Reaction'?
          <div className=' bg-[hsla(0,100%,67%,.1)] p-[10px] mobile:p-[15px] text-sm font[400] w-full rounded-lg flex justify-between'>
            
            <div className="text-[hsl(0,100%,67%)] font-[700]">
            {/* {item.icon} */}
            {item.category}
            </div>
            <div className="text-[hsl(224,30%,27%)]  text-[18px] font-[400]">
            <span className=" font-[700]">{item.score}</span> <span className="opacity-[.5] font-[400]">/ 100</span> 
            </div>
         
          </div> 
          :item.category === 'Memory'? 
          <div className='bg-[hsla(39,100%,56%,.1)] p-[10px] mobile:p-[15px] text-sm font-[400] w-full rounded-lg flex justify-between'>
         
              <div className="text-[hsl(39,100%,56%)] font-[700]">
                {/* {item.icon} */}
                {item.category}
                </div>
                <div className="text-[hsl(224,30%,27%)] text-[18px] font-[400]">
                <span className="font-[700]">{item.score}</span> <span className="opacity-[.5] font-[400]">/ 100</span> 
                </div>
              </div>
          :item.category === 'Verbal'?
          <div className='bg-[hsl(166,100%,37%,.1)] p-[10px] mobile:p-[15px] text-sm font-[400] w-full rounded-lg flex justify-between'>
              <div className="text-[hsl(166,100%,37%)] font-[700]">
                {/* {item.icon} */}
                {item.category}
                </div>
                <div className="text-[hsl(224,30%,27%)] text-[18px] font-[400]">
                <span className="font-[700]">{item.score}</span> <span className="opacity-[.5] font-[400]">/ 100</span> 
                </div>
              </div>
          :item.category === 'Visual'?
          <div className='bg-[hsla(234,85%,45%,.1)] p-[10px] mobile:p-[15px] text-sm font-[400] w-full rounded-lg flex justify-between'>
            
                <div className="text-[hsl(234,85%,45%)] font-[700]">
                {/* {item.icon} */}
                {item.category}
                </div>
                <div className="text-[hsl(224,30%,27%)] text-[18px] font-[400]">
                <span className="font-[700]">{item.score}</span> <span className="opacity-[.5] font-[400]">/ 100</span> 
                </div>
          </div>
          :'N/A'
         }
        </div>
      )) 
      } 
      </div>

      <button className=' text-white text-[20px] font-[400] rounded-full bg-[hsl(224,30%,27%)] p-[25px] w-full hover:bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,1)]'>Continue</button>
    </div>
  )
}

export default Summary