import React, {useContext, useState} from "react";


const ImageContext = React.createContext();

export function ImageProvider({children}) {
    const [imageURLS, setImageURLS] = useState([]);

    return (
        <ImageContext.Provider value={{imageURLS, setImageURLS}}>
            {children}
        </ImageContext.Provider>
    )
}

export default function useImage() {
    return useContext(ImageContext);
}


