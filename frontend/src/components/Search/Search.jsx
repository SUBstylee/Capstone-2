import {useState} from 'react'
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Search.scss';

const Search = () => {
    const [active,setActive]=useState(false);
    const [keyword,setKeyword]=useState('');

    const navigate=useNavigate();

    const handleClick=()=>{
        setActive(!active);
    };

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log('submitted');
        if(keyword){
            navigate(`/search/${keyword.trim()}`);
        }else{
            navigate('/');
        };
    };

  return (
    <div className={`Search ${active?'active':''}`}>
        <Form onSubmit={submitHandler}>
            <input type='text' name='q' className='Search-input' placeholder='Search Products...' onChange={(e)=>setKeyword(e.target.value)}/>
        </Form>
        <button className='Search-btn' onClick={handleClick}>
            <i className='fas fa-search'></i>
        </button>
    </div>
  )
}

export default Search