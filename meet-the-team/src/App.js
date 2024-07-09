//U14123683
import React from 'react'
import Gallery from './Gallery'
import './App.css'
import Header from './Header'
//Team members
const members = [
    {name: 'Froggy', role: 'Chief Hopping Officer',photo: 'https://images.squarespace-cdn.com/content/v1/59af918bc534a58c97c3440a/f7c162c9-50d3-49a3-bdde-4483c1f4c079/Facebook+Cover+Photo+Your+Favourite+Vet+%282%29.png'},
    {name: 'Mr. Rabbit', role: 'VP of Job Hopping', photo: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Oryctolagus_cuniculus_Rcdo.jpg'},
    {name: "Chairman 'Roo", role: 'Chairman of Hopping Committee', photo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Kangaroo_Australia_01_11_2008_-_retouch.JPG'}
];
//Displaying gallery with any number of members
export default function App() {
    return (
        <div>
            <Header/>
            <Gallery members={members} />
        </div>
    );
}