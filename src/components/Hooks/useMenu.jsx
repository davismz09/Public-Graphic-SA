import {useState} from "react";
import {useNavigate} from "react-router-dom";

const useMenu = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenuOnClick = () => {
    setIsMenuOpen(false);
  };

  const handleClick = (sectionId) => {
    event.preventDefault(); // Evita que el enlace se siga
    navigate(sectionId);
  };

  return {
    isMenuOpen,
    toggleMenu,
    closeMenuOnClick,
    handleClick,
  };
};

export default useMenu;