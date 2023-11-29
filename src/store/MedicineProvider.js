import React from 'react'
import MedicineContext from "./medicine-context";

const MedicineProvider = (props) => {

    // const medicinecontext = {
    //     stock: props.stock,
        
    // }

    return (
        <div>
            {props.children}
        </div>
    );

}

export default MedicineProvider;

