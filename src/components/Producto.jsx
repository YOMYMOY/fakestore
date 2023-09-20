import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function Producto({ producto, agregarAFavoritos, eliminarDeFavoritos }) {

    const [favorito, setFavorito] = useState(false);

    useEffect(() => {
        // Verificar si el producto está en favoritos en el LocalStorage
        const favoritosEnLocalStorage = JSON.parse(localStorage.getItem('favoritos')) || [];
        const estaEnFavoritos = favoritosEnLocalStorage.some((item) => item.id === producto.id);

        if (estaEnFavoritos) {
            setFavorito(true);
        }
    }, [producto.id]);

    function handleClick() {
        if (favorito) {
            eliminarDeFavoritos(producto);
            setFavorito(false);
        } else {
            agregarAFavoritos(producto);
            setFavorito(true);
        }

        // Guardar el estado actual de favorito en el LocalStorage
        const favoritosEnLocalStorage = JSON.parse(localStorage.getItem('favoritos')) || [];
        const index = favoritosEnLocalStorage.findIndex((item) => item.id === producto.id);

        if (favorito) {
            if (index !== -1) {
                favoritosEnLocalStorage.splice(index, 1);
            }
        } else {
            if (index === -1) {
                favoritosEnLocalStorage.push(producto);
            }
        }

        localStorage.setItem('favoritos', JSON.stringify(favoritosEnLocalStorage));

    }
    return (
        <div className='producto'>
            <Link to={`/producto/${producto.id}`}><img src={producto.image} alt='' /></Link>
            <div className='info'>
                <p>{producto.title}</p>
                <mark>${producto.price}</mark>
            </div>
            {
                favorito ?
                    <FaHeart className='fav-icon' onClick={handleClick} />
                    :
                    <FaRegHeart className='fav-icon' onClick={handleClick} />
            }

        </div>
    )
}
