// UsuarioCard.jsx
import { useNavigate } from 'react-router-dom';

export function UsuarioCard({ usuario }) {
  const navigate = useNavigate();

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {usuario.nombre}
      </td>
      <td className="px-6 py-4">{usuario.apellidos}</td>
      <td className="px-6 py-4">{usuario.email}</td>
      <td className="px-6 py-4">{usuario.fecha_registro}</td>
      <td className="px-6 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            navigate('/usuario/' + usuario.id);
          }}
        >
          Detalles
        </button>
      </td>
    </tr>
  );
}
