import { useState } from "react"
import PropTypes from "prop-types"


export const AddCategory = ({onNewCategory}) => {

    // useState para el input
    const [inputValue, setInputValue] = useState("")

    // función para el cambio de valor del input
    const onInputChange = ({target}) =>{
           setInputValue(target.value)
           
    }

    // función para ENTER en el input
    const onSubmit = (event) =>{
        event.preventDefault();                     // que no se actualice la página
        if(inputValue.trim().length <= 1) return;   // validar que el string sea grande
        onNewCategory(inputValue.trim() );          // limpiar el string ingresado en el input
        setInputValue("");                          // resetear el input una vez dado ENTER
    }

    // CÓDIGO HTML
    return (
        <>
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                    type="text" 
                    placeholder="Busca un GIF..."
                    value={inputValue}
                    onChange={onInputChange}
                />
        </form>
        </>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
