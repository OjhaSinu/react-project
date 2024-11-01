import axios from "axios";
import { useEffect, useState } from "react";

export function NasaApi() {
    const [marsPhotos, setMarsPhotos] = useState([]); // Initialized as an array

    function LoadData() {
        axios
            .get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
            .then(response => {
                setMarsPhotos(response.data.photos); // Directly setting the photos array
            });
    }

    useEffect(() => {
        LoadData();
    }, []);

    return (
        <>
            <div className="container">
                <h3>Nasa Api Rover Data</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Photo Id</th>
                            <th>Camera Name</th>
                            <th>Preview</th>
                            <th>Rover Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marsPhotos.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.camera.full_name}</td>
                                <td>
                                    <img src={item.img_src} alt="Mars Rover" width="100" />
                                </td>
                                <td>{item.rover.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
