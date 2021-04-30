import React from 'react';
import '../../App.css';
import Heading from '../Heading';
import ProductItems from '../ProductItems';
import ScrollUp from '../ScrollUp';
import SnsButtons from '../SnsButtons';
import Footer from '../Footer';

function Product() {
    return (
        <>
            <Heading
            heading='PRODUCT'
            JapaneseHeading='制作したもの' />
            <SnsButtons />
            <ProductItems />
            <ScrollUp />
            <Footer />
        </>
    )
}

export default Product
