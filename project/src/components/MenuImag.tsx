import bottomMenu from "../assets/bg-bottom-menu.svg"


const MenuImag = () => {
  return (
    <img
      src={bottomMenu}
      style={{
        position: "fixed",
        bottom: "51rem",
        left: 0,
        zIndex: 1,
      }}
    />
  );
};

export default MenuImag;
