
export function Product(props) {

    return (
        <div className="product">
            <img src={props.src} alt="" />
            <div className="name">{props.name}</div>
        </div>
    );




}