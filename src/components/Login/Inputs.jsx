import React from 'react'

const Inputs = ({attribute, handleChange, param}) => {
    return (
        <div>
            <input
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange={ (e) => handleChange(e.target.name, e.target.value)}
            className={ param ? 'form-control' : 'form-control'} 
            />
        </div>
    )
}

export default Inputs