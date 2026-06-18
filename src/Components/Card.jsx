import {Bookmark} from "lucide-react"
function Card(props) {
  return (
      <div className="card">
        <div>
          <div className="top">
          <img src={props.logo} alt="Amazon logo " />
          <button>Save <Bookmark size={13}/></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.posted}</span></h3>
          <h2>{props.position}</h2>
          <div className="tag">
            <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
   
            <div>
              <h3>{props.payment}</h3>
              <p>{props.location}</p>
              </div>
              <button>Apply Now</button>

        </div>

      </div>

  )
}

export default Card