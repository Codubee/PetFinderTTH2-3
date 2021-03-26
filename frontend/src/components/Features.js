import React from 'react';

const emojis = [
    {
        emoji:'🐶',
        name: "dog"
    },
    {
        emoji: '🐾',
        name: "paws"
    },
    {
        emoji: '🐱',
        name: "cat"
    },
];

function Features() {
    return (
        <div class="container">
            <h1>Pet Finder Features</h1>

            <ul class="center">
            {
                emojis.map(pet => (
                <li class="in-a-row">
                    {pet.emoji}
                </li>
                ))
            }
            </ul>
            
            <p>With Pet Finder, users can:</p>
            <ul>
                <li>Match with animal shelters near them</li>
                <li>Find the perfect pet</li>
            </ul>         
        </div>
    );
}

export default Features;
