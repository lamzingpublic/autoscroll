import React from 'react';
import Card from './Card';


interface Props {
    name: string;
    desc: string;
    imageurl: string;
}


const PictureCard: React.FC<Props> = ({
    name,
    desc,
    imageurl,
}) => (
        <Card>
            <img src={imageurl} width='100%' />
        </Card>
    )

export default PictureCard;