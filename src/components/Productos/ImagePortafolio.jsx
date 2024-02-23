import {useNavigate} from "react-router-dom";

export default function ImagePortafolio({producto}) {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/productos/${producto.id}`);

  return (
    <div className='container-imagen-port' onClick={handleClick}>
      <div className='imagen-port'>
        <img src={producto.imagen} alt={producto.titulo} />
      </div>
      <div className='textos-galeria'>
        <h3>{producto.titulo}</h3>
      </div>
    </div>
  );
}
