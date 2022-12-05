import { useParams } from "react-router-dom";

function NoFoundReview() {
  const param = useParams().search;
  return <div className="mx-auto my-10 flex">
    <div className="col-md-6 align-self-center m-5 mt-24 align-middle">
      <h1  className='text-6xl'>Not Reviews </h1>
      <p className='text-2xl overflow-auto'>There are no reviews for this {param}</p>
      <img className="" src="https://media.istockphoto.com/id/1038232966/vector/upset-magnifying-glass-vector-illustration.jpg?b=1&s=612x612&w=0&k=20&c=ddPTf1vKFaGLTMl7wx1C7E5t6uZlIMRpDywyWxAdrDo=" alt="" />
    </div>
  </div>
}

export default NoFoundReview;
