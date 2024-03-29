import Menu from "../menu/menu.jsx";
import data from "../../textos.json";
import Button from "../menu/button.jsx";
import Capa from "../menu/capa.jsx";
import useMenu from "../hooks/use-menu.jsx";

export default function Header() {
  const {menu} = data;
  const {isMenuOpen, toggleMenu, closeMenuOnClick, handleClick} = useMenu();

  return (
    <header className={`header`}>
      <Capa isMenuOpen={isMenuOpen} closeMenuOnClick={closeMenuOnClick} />
      <Button
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenuOnClick={closeMenuOnClick}
      />
      <div className='container-header-image'>
        <img
          decoding='async'
          onClick={() => handleClick()}
          style={{height: "55px"}}
          src={menu.img.src}
          alt='Logo Public Graphic'
        />
      </div>
      <Menu menu={menu} handleClick={handleClick} isMenuOpen={isMenuOpen} />
    </header>
  );
}
