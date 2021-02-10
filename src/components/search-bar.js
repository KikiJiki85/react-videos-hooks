import React, { useState }  from 'react';


const SearchBar = ({ onFormSubmit }) => {

    const [term, setTerm] = useState('');

    const onSubmit = (evt) => {
        evt.preventDefault();
        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text"
                        value={term}
                        onChange={(evt) => setTerm(evt.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;