import './CustomInput.scss';

const CustomInput = ({labelText,id, ...otherProps}) => {
    const labelTextArr=labelText.split('');
    let labelKey=0;

    return (
        <div className='CustomInput'>
            <input {...otherProps} id={id}/>
            <label htmlFor={id}>{
                labelTextArr.map((char)=><span style={{transitionDelay:`${labelKey*50}ms`}} key={labelKey++}>{char}</span>)
            }</label>
        </div>
    );
};

export default CustomInput;