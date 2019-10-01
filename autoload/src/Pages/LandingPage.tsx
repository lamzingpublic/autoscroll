import React, { Component, useState, useEffect } from 'react';

import PictureCard from "../Components/PictureCard";
import API from "../lib/api";
import {
    Box,
    Flex
} from 'rebass'

type imageType = {
    name: string;
    desc: string;
    image: string;
}

type imageProps = {
    images: imageType[]
}


var sample = [
    {
        "url": "http://127.0.0.1:8000/photo/3/",
        "name": "lamzing",
        "desc": "This is my family photo",
        "image": "http://www.facenfacts.com/daily_img/452_L_Nature.jpg",
        "created_at": "2019-09-29T12:07:41.777940Z",
        "updated_at": "2019-09-29T12:07:41.777970Z"
    },
    {
        "url": "http://127.0.0.1:8000/photo/3/",
        "name": "lamzing",
        "desc": "This is my family photo",
        "image": "http://www.facenfacts.com/daily_img/452_L_Nature.jpg",
        "created_at": "2019-09-29T12:07:41.777940Z",
        "updated_at": "2019-09-29T12:07:41.777970Z"
    },
    {
        "url": "http://127.0.0.1:8000/photo/3/",
        "name": "lamzing",
        "desc": "This is my family photo",
        "image": "http://www.facenfacts.com/daily_img/452_L_Nature.jpg",
        "created_at": "2019-09-29T12:07:41.777940Z",
        "updated_at": "2019-09-29T12:07:41.777970Z"
    }
]

const LandingPage: React.FC = () => {
    const [images, setImages] = React.useState<imageType[]>(sample)

    useEffect(() => {
        /*API.getPictures().then((data) =>
            setImages(data)
        )*/
    }, []);


    return (
        <Flex>
            <Box p={1} width={[1 / 2, 1 / 4, 1 / 3]}>
                {images.map((item, index) => <PictureCard key={index} name={item.name} desc={item.desc} imageurl={item.image} />)}
            </Box>
            <Box p={1} width={[1 / 2, 1 / 4, 1 / 3]}>
                {images.map((item, index) => <PictureCard key={index} name={item.name} desc={item.desc} imageurl={item.image} />)}
            </Box>
        </Flex>
    )
}


export default LandingPage;

