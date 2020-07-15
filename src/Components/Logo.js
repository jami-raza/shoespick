import React from 'react';
import useWebAnimations,{bounce} from "@wellyshen/use-web-animations";
export default function Logo(){
    const {ref} = useWebAnimations({...bounce})
    return(
        <div>
            <h1 className="Logo" ref={ref}>Shoe Pick</h1>    
        </div>
    )
}