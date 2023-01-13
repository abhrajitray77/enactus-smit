import React, { useState } from 'react'
import { Card } from './Card';

export const CardsSlide = () => {
    const [currentCard, setCurrentCard] = useState(0);
    const cards = [
    {
        title: 'Card 1',
        description: 'description card 1',
        image: 'path/to/image1.jpg',
       // link: 'https://example.com/card1'
    },
    {
        title: 'Card 2',
        description: 'This is card 2',
        image: 'path/to/image2.jpg',
        //link: 'https://example.com/card2'
    },
    {
        title: 'Card 3',
        description: 'This is card -3',
        image: 'path/to/image3.jpg',
        //link: 'https://example.com/card3'
        }
        ]
        
        return (
        <div className="relative mt-8">
            <div className=" top-0 left-0 w-full h-full flex items-center justify-center">
                <Card {...cards[currentCard]} />
            </div>
        </div>
        )
}
