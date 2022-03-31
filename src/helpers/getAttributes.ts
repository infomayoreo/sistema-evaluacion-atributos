
export const getAttributes = async (token:string) => {
  //${import.meta.env.VITE_API}
  try {
    const url = `https://sistema-evaluacion-atributos.herokuapp.com/api/v1/attributes`;
    const config = {
      method: "GET",
      headers: {
        token: token,
      },
    };
    const respuesta = await fetch(url, config);
    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    throw error;
  }
};
