const NavBar = (props) => {
  //destructure from props
  const { username } = props;
  return (
    <div>
      <h1>
        <a href='/'>Nextflix</a>
      </h1>

      <p>{username}</p>
    </div>
  );
};

export default NavBar;
