import { useEffect, useState } from 'react';

import * as hotelService from '../../services/hotelService.js';
import HotelListItem from './hotel-list-item/HotelListItem.jsx';
import Spinner from "../../utils/Spinner.jsx";


export default function HotelList() {
    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        hotelService.getAll()
            .then(result => setHotels(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <section id="catalog-page">

            {isLoading && <Spinner />}

            <div className="logo-catalog">
                <img src="../images/hotel_icon_2.png" alt="hero"/>
            </div>

            <h1>All Hotels</h1>


            {hotels.map(hotel => (
                <HotelListItem key={hotel._id} {...hotel} />
            ))}

            {hotels.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
}
