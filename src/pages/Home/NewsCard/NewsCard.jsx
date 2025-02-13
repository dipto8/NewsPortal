import { Link } from "react-router-dom"

export default function NewsCard({news}) {
    const {title, image_url,details, _id} = news
  return (
    <div className="card card-compact  shadow-md mb-16 p-2">
    <figure>
      <img
        src={image_url}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-2xl mb-2">{title}</h2>
      <h4 className="border-b-1 border-orange-200"></h4>
      {
      details.length > 200 
      ? <p className="text-xl">{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-orange-200">Read more..</Link  ></p>
      : <p>{details}</p>

      }
      <div className="card-actions justify-end">
       
      </div>
    </div>
  </div>
  )
}
