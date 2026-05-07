const URL_API = "http://localhost:3000/products";

const getToken = () => {
  return localStorage.getItem("token");
};

export const getProducts = async () => {
  const response = await fetch(URL_API);

  if (!response.ok) {
    throw new Error("Error al obtener los productos");
  }

  const data = await response.json();

  return data;
};

export const deleteProduct = async (id) => {
  const token = getToken();

  const response = await fetch(`${URL_API}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = new Error("Error al borrar el producto");
    error.status = response.status;
    throw error;
  }

  return true;
};
