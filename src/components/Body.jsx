export default function Body() {
  return (
    <div className="border-b-2 pb-4 mt-5">
      <div className="flex">
        <h2 className="text-lg text-warm-gray mr-5">รอบที่เปิด</h2>
        <div className="flex text-white">
          <div className=" rounded-full round flex items-center justify-center bg-greenish-teal mx-2">
            1
          </div>
          <div className=" rounded-full round flex items-center justify-center bg-greenish-teal mx-2">
            2
          </div>
          <div className=" rounded-full round flex items-center justify-center bg-warm-gray mx-2">
            3
          </div>
          <div className=" rounded-full round flex items-center justify-center bg-greenish-teal mx-2">
            4
          </div>
          <div className=" rounded-full round flex items-center justify-center bg-warm-gray mx-2">
            5
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-md font-semibold text-primary">
          รอบที่ 4: Admission
        </h3>
        <button className="border-primary border-2 rounded-full text-primary p-2 text-sm">
          แก้ไขคะแนน
        </button>
      </div>
      <div className="flex justify-end mt-5">
        <div className="flex flex-col ">
          <h4 className="text-sm">คะแนนของคุณคือ</h4>
          <h1 className="text-4xl">23,453</h1>
        </div>
      </div>
      <div className="flex justify-between mt-5 text-center">
        <div className="flex flex-col">
          <h3 className="text-lg">20,845</h3>
          <h4 className="text-sm">คะแนนต่ำสุด 60</h4>
        </div>
        <div className="flex flex-col border-l-2 border-r-2 px-6">
          <h3 className="text-lg">20,845</h3>
          <h4 className="text-sm">คะแนนต่ำสุด 60</h4>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg">20,845</h3>
          <h4 className="text-sm">คะแนนต่ำสุด 60</h4>
        </div>
      </div>
    </div>
  );
}
