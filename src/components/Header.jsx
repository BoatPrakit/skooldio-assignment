import axios from "axios";
import { useState, useEffect } from "react";
//ไม่สามารถดึง api ได้เนื่องจากติด Cors policy จากฝั่ง backend
export default function Header() {
  const [logo, setLogo] = useState(
    "https://tcas-assets.skooldio.com/icons/edugroup/med.png"
  );
  const [departmentName, setDepartmentName] = useState("คณะวิศวกรรมศาสตร์");
  const [branch, setBranch] = useState("สาขาวิศวกรรมทั่วไป");
  const [university, setUniversity] = useState("จุฬาลงกรณ์มหาวิทยาลัย");
  //   useEffect(() => {
  //   }, []);
  return (
    <div className="flex  border-b-2 pb-4">
      <img src={logo} className="logo mr-5"></img>
      <div className="flex flex-col">
        <div className="mb-2">
          <p className="text-primary font-bold text-xl">{departmentName}</p>
          <p className="text-warm-gray font-semibold">{branch}</p>
        </div>
        <p className="text-warm-gray ">{university}</p>
      </div>
    </div>
  );
}
