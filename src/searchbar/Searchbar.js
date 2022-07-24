import React from "react";

const {useState} = React;

const Searchbar = (props) => {
    const { onSearch } = props;
    const [search, setSearch] = useState("");
    const onChange = (evt) =>{
        setSearch(evt.target.value);
    }
    const onClick = async (evt) => {
        onSearch(search);
    }

    return (
        <div>
            <div>
                <input placeholder="Buscar pokemon..." onChange={onChange}/>
            </div>
            <div>
                <button onClick={onClick}>Buscar</button>
            </div>
            <div></div>
        </div>
    );
};

export default Searchbar;