import { useState } from 'react';

export const useForm = ( initialState: any = {}): any[] => {

    const [values, setValues] = useState(initialState);

    // Desestructura el target del event para obtener la informacion del input
    const handleInputChange = ({ target }: any) => {
        
        setValues({
            ...values,
            [target.name]: target.value
        });

    };

    // Resetea el valor del input
    const reset = ( newFormState = initialState ) => {
        setValues( newFormState );
    }

    return [ values, handleInputChange, reset ];

};
