import { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './Toast.scss';

const Toast = ({messageTitle, messageText, top, right, time}) => {
    const [seen,setSeen]=useState(false);

    useEffect(()=>{
        const toastTimer = setTimeout(()=>{
            setSeen(true);
        },`${time}`);
        return ()=>clearTimeout(toastTimer);
    },[time]);

  return (
    <div onClick={()=>setSeen(true)} className={`Toast ${seen?'hidden':''}`} style={{top: `${top}`, right: `${right}`}}>
        <Button variant='danger' className="btn-sm"><i className="fa-solid fa-x"></i></Button>
        <h4>{messageTitle}</h4>
        <p>{messageText}</p>
    </div>
  );
};

export default Toast;