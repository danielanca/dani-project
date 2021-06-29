import "./ListContainer.css";
const ListContainer = (props) => {
    return (
        <div className="list_component">
            <ul>
                <h2 className="column-header"> Column Heading</h2>
                <li className="list-item">
                    <p className="text-list">Link goes here </p>
                </li>
                <li className="list-item">
                    <p className="text-list">Pfirzen </p>
                </li>
                <li className="list-item">
                    <p className="text-list">Pfirzen </p>
                </li>
                <li className="list-item">
                    <p className="text-list">Pfirzen </p>
                </li>
            </ul>
        </div>
    );
};

export default ListContainer;
