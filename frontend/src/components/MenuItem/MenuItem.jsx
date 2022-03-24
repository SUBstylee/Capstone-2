import './MenuItem.scss';
import {useNavigate} from 'react-router-dom';

const MenuItem = ({ title, imageUrl, linkUrl, match }) => {
    const navigate=useNavigate();

    return (
        <div className={`MenuItem`} onClick={() => navigate(`/search/${linkUrl}`)}>
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div >
    )
};

export default MenuItem;