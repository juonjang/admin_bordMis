import "./navbar.scss"

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>NBHospital</span>
      </div>
      <div className="icon">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notifications">
          <img src="/notifications.svg" alt="" />
          <span>3</span>
        </div>
        <div className="user">
          <img src="https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.6435-9/107800322_10158074221113141_7482189464672310400_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF1J0pVCWqCy4cDeYnkACaPtGdlKP5dy_q0Z2Uo_l3L-n85LWgKkP27lwvhkzt0ZYo&_nc_ohc=FnQ9P3hafn8AX9z7XQA&_nc_ht=scontent.fbkk8-4.fna&oh=00_AfCNJKWmfgEF2Uj01o8R8wZEr0YwZew2R5QwpWHamD9PsA&oe=6520BAAE" alt="" />
          <span>Juon</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}
