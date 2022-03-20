import {Helmet} from 'react-helmet';

const MetaWrapper = ({title,description,keywords}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <meta name='keywords' content={keywords}/>
    </Helmet>
  );
};

MetaWrapper.defaultProps={
    title: 'TAA',
    description: 'We sell the best apparel at Totally Awesome Apparel',
    keywords: 'apparel, clothing, hats, shoes, jackets'
};

export default MetaWrapper