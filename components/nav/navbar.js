const NavBar = (props) => {
  //destructure from props
  const { username } = props;
  return (
    <div>
      NavBar
      <p>{username}</p>
    </div>
  );
};

export default NavBar;
