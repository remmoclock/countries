function Loader() {
  return (
    <div>
      <img
        className=" object-contain w-full h-screen"
        src={process.env.PUBLIC_URL + "/gifWorld.gif"}
        alt=""
      />
    </div>
  );
}

export default Loader;
