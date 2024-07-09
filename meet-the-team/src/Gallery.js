// U14123683
import Profile from "./Profile.js"
//mapping any amount of profiles to gallery
export default function Gallery({members}) {
  return (
      <div>
          {members.map((member) => (
              <Profile
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
              />
          ))}
      </div>
  );
}