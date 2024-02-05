import React, {useEffect} from "react";

export default function Title({title}){
    useEffect(() =>{
        document.title = `T.R.L. Express - ${title}`;
    },[title]);
}