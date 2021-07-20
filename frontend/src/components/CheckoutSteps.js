import React from 'react'

export default function CheckoutSteps(props) {
    return (
        <div className="container">
            <div className="row checkout-steps center" >
                <div className={props.step1 ? 'active col s3':"col s3"}>
                    Identificarse
                </div>
                <div className={props.step2 ? 'active col s3':"col s3"}>
                    Datos de envío
                </div>
                <div className={props.step3 ? 'active col s3':"col s3"}>
                    Pago
                </div>
                <div className={props.step4 ? 'active col s3':"col s3"}>
                    Estado Orden
                </div>
            </div>
        </div>
    )
}
