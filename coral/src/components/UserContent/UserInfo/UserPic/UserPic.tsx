import { Container } from "./style";
import { useState } from "react";
import { storage } from "../../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import Avatar from '@mui/material/Avatar';
import { display } from "@mui/system";
import { SmallRedButton } from "../../../Buttons/WhiteButton/SmallRedButton/SmallRedButton";


export function UserPic() {
    const [image, setImage] = useState<any>();
    const [url, setUrl] = useState<any>();

    const handleImageChange = (e:any) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = () => {
        const imageRef = ref(storage, "image");
        uploadBytes(imageRef, image)
            .then(() => {
                getDownloadURL(imageRef)
                    .then((url) => {
                        setUrl(url);
                    })
                    .catch((error) => {
                        console.log(error.message, "error getting the image url");
                    });
                
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div style={{display:"flex", alignItems:"flex-end", gap:"20px"}} className="App">
            <Avatar src={url} sx={{ width: 80, height: 80 }} />
            <input style={{position:"absolute", opacity:"0", height:"50px"}} className="blue-button-small" type="file" placeholder="Upload" onChange={handleImageChange} />
            <button className="blue-button-small" onClick={handleSubmit}>Upload</button>
            <SmallRedButton text="Delete"/>
        </div>
    );
}