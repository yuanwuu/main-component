const Result = () => {

  let ranNum = Math.ceil(Math.random()*100)

  return (
    <div id="container" className="text-[hsl(221,100%,96%)] flex flex-col items-center h-full justify-evenly">

      <div id="heading" className="font-[700] text-2xl">
        <h1 >Your Result</h1>
      </div>


      <div id="num-container" className=" w-[100px] h-[100px]  mobile:w-[200px] mobile:h-[200px] flex items-center rounded-full justify-center bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)] p-6 ">
        
        <div className="grid">
          <span className=" font-[800] text-4xl mobile:text-8xl ">{ranNum}</span>
          <span className="text-lg mobile:text-3xl font-[400]">of 100</span>
        </div>
      </div>
      

      <div id="result-stat">
        <h1 className="font-[400] text-2xl">Great</h1>
        <p className="text-[18px] font-thin">
          You scored higher than {ranNum}% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Result;
