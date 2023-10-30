import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'

import PropTypes from 'prop-types'

export const GifExpertApp = () => {

    // necesitamos un hook para mantener el estado
    const [categories, setCategories] = useState(["Frank Ocean"]);
    
    const onAddCategory = (newCat) =>{

        if (categories.includes(newCat)) return;
        // añadimos un item al arreglo debemos serguir iterando con "...categories"
        // para que no se borre lo que ya había
        setCategories([newCat, ...categories])

    }

    return (
        <>
            <h1> GIF-Expert-App</h1>

            <AddCategory onNewCategory={ onAddCategory }/>

            {categories.map(cat => (
                <GifGrid 
                category={cat} 
                key={cat}
                />
                )                
            )}
                {/* GIF-item */}
        </>
    )
}

GifExpertApp.propTypes = {
    onAddCategory: PropTypes.func.isRequired,
}
