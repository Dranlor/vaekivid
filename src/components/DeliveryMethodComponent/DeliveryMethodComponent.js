import "./DeliveryMethodComponent.css";

function DeliveryMethodComponent(props) {
    return <div className="DeliveryMethodComponent">
        <h2>
            {props.title}
        </h2>
        <hr/>
        <div className="CourierOptionContainer">
            {props.children}
        </div>
    </div>

}


export default DeliveryMethodComponent;