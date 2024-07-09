// intakes name role and photo to dynamically create profiles
export default function Profile({name, role, photo}){
    return(
      <div className="profiles">
        <img src={photo} alt="member photo" className="memberphoto"/>
        <h3>{name}</h3>
        <h4>{role}</h4>
      </div>
    )
  }