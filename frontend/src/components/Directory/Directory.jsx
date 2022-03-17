import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import './Directory.scss';

const Directory =()=> {
    const cats = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: '/assets/images/shop-img/hats.png',
                    id: 1,
                    linkUrl: '__Hats__'
                },
                {
                    title: 'jackets',
                    imageUrl: '/assets/images/shop-img/jackets.png',
                    id: 2,
                    linkUrl: '__Jackets__'
                },
                {
                    title: 'shoes',
                    imageUrl: '/assets/images/shop-img/sneakers.png',
                    id: 3,
                    linkUrl: '__Shoes__'
                },
                {
                    title: 'women',
                    imageUrl: '/assets/images/shop-img/womens.png',
                    id: 4,
                    linkUrl: '__Women__'
                },
                {
                    title: 'men',
                    imageUrl: '/assets/images/shop-img/men.png',
                    id: 5,
                    linkUrl: '__Men__'
                },
                {
                    title: 'all',
                    imageUrl: '/assets/images/shop-img/sample.png',
                    id: 6,
                    linkUrl: '__All__'
                }
            ]
        };

    return (
        <div className="Directory">
            {
                cats.sections.map(({ id, ...others }) => (
                    <MenuItem key={id} {...others} />
                ))
            }
        </div>
    );
};

export default Directory;