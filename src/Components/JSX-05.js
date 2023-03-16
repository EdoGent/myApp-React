import React from 'react';

const SumComponents = (a, b) => {
    function Sum (a, b) {
        return a + b;
    }
    return (
        <h2>{Sum(5, 5)}</h2>
    ) 
}

export default SumComponents;