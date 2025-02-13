import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightNav from "../shared/RightNav/RightNav";
import Navbar from "../shared/Navbar/Navbar";

export default function News() {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h1>News Details</h1>
          <p>{id}</p>
        </div>
        <div className="">
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
}
