import React, {useState} from 'react';

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const onInputChange =(event)=>{
        setTerm(event.target.value);
        
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        props.onTermSubmit(term);
    }

    
    return(
        <div className="ui segment">
                <form className="ui form" onSubmit ={onSubmit} >
                <div className="ui field">
                    <label> Video Search</label>
                    <input type="text" value={term} onChange={onInputChange}/>
                </div>
            </form>
        </div>
        
    );
    
}

export default SearchBar;