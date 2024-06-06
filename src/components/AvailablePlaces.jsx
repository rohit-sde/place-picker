import { useEffect, useState } from "react";
import Places from "./Places.jsx";

import Error from "../components/Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchplaces() {
            setIsFetching(true);

            try {
                const response = await fetch("http://localhost:1000/places");
                const resData = await response.json();

                if (!response.ok) {
                    throw new Error("failed to fetch places");
                }

                setAvailablePlaces(resData.places);
            } catch (error) {
                setError({
                    message:
                        error.message ||
                        "could not fetch places, please try again later",
                });
            }
            setIsFetching(false);
        }

        fetchplaces();
    }, []);

    if (error) {
        return <Error title="An error occurred!" message={error.message} />;
    }

    return (
        <Places
            title="Available Places"
            places={availablePlaces}
            isloading={isFetching}
            loadingText="Fetching place data..."
            fallbackText="No places available."
            onSelectPlace={onSelectPlace}
        />
    );
}
