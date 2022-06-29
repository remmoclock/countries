function Loader() {
  return (
    <div className="flex justify-center items-center h-screen  ">
      <img
        className=" object-contain w-[50%] h-[50%]"
        src={process.env.PUBLIC_URL + "/gifWorld.gif"}
        alt=""
      />
    </div>
  );
}

export default Loader;
