import { useEffect, useState} from "react"
import { useSelector } from 'react-redux';
import {getAttributes} from "../../../../helpers/getAttributes"

export const AttributePage = () => {
	const {googleToken} = useSelector( (state) => state.auth );
  const token = googleToken
  const [atributos, setAtributos] = useState({})
  useEffect(() => {
    getAttributes(token)
    .then(response => setAtributos(response))
  }, [])
  

  console.log(atributos)
  return (
    <div>Atributos
      {/* {atributos.data.attributes.map(atributo => (
        <h1 key={atributo.id}>{atributo.name}</h1>
      ))} */}
    </div>
  )
}
