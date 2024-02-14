import data from "@/util/data";
const Home = async () => {
  return (
    <main className="p-8">
      <div className="flex flex-wrap gap-4 justify-evenly">
        {data.map((item: any, i: number) => (
          <div
            key={i}
            className="flex border w-[336px] h-[192px] p-1 rounded-xl border-zinc-400 bg-white ">
            <div className="grid grid-cols-2 w-full">
              <div className="flex w-[150px] h-[150px] overflow-hidden bg-zinc-100 rounded-lg shadow-sm border m-auto">
                <img
                  className="w-full h-full object-center"
                  src={item.img}
                  alt={item.eng}
                />
              </div>
              <div className="text-center my-auto">
                <h5 className="font-bold mb-1 py-1 text-blue-600 drop-shadow-md whitespace-break-spaces uppercase">
                  {item.eng}
                </h5>
                <div className="mx-auto px-5 mb-1 rounded-lg shadow">
                  <h5 className="font-boldtext-red-600">{item.hindi.lang}</h5>
                  <h5 className="text-red-800">{item.hindi.slug}</h5>
                </div>
                <div className="mx-auto px-5 mb-1 py-1 rounded-lg shadow">
                  <h5 className="font-bold text-green-600">
                    {item.japanese.lang}
                  </h5>
                  <h5 className=" text-green-800">{item.japanese.slug}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
