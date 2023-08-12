'use client';
import { useEffect, useState } from "react";
import { ErrorPage } from "../components/ErrorPage";
import { Welcome } from "../components/Welcome";


const Home = () => {
    const [UserData, setUserData] = useState(null);

    useEffect(() => {
        const userDataJSON = localStorage.getItem('userData');
        if (userDataJSON) {
            const userData = JSON.parse(userDataJSON);
            console.log(userData);
            setUserData(userData);
        }
    }, []);

    return (
        <div>
            {UserData ? (
                <Welcome />
            ) : (
                <ErrorPage />
            )}
        </div>

    );
};

export default Home;