import axios from "axios"
import { useEffect, useState } from "react";
import Card from "./components/Card";
import 'remixicon/fonts/remixicon.css';

const App = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1)
  async function getData() {
    setData([]);
    let response = await axios(`https://picsum.photos/v2/list?page=${index}&limit=15`);
    setData(response.data);
  }
  useEffect(() => {
    getData();
  }, [index]);
  let clutter = <h1>Loading...</h1>
  {
    if (data.length > 0) {
      clutter = data.map((elem, idx) => {
        return (
          <Card elem={elem} key={idx} />
        )
      })
    }
  }
  return (
    <div className='h-screen w-full overflow-auto bg-slate-950 text-white flex justify-start items-center flex-col '>
      <h1 className="text-3xl p-4 font-bold">My Gallery App</h1>
      <div id="container" className="flex w-full justify-center items-center flex-wrap gap-6 p-8">
        {clutter}
      </div>
      <div className="w-full bg-[#0009] drop-shadow-4xl fixed bottom-0 p-4 flex justify-center items-center gap-4 *:shadow-xl *:cursor-pointer">
        <button onClick={() => {
          if (index > 1) {
            setIndex(index - 1);
          }
        }}><i className="ri-arrow-left-s-line"></i></button>
        <h1>Page {index}</h1>
        <button onClick={() => {
          setIndex(index + 1)
        }}><i className="ri-arrow-right-s-line"></i></button>
      </div>
    </div>
  )
}

export default App
