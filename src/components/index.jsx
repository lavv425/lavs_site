import React, { useEffect, useState } from "react";
import Title from "./helpers/Title";
import Navbar from "./Navbar/Navbar";
import IndexBody from "./Index/IndexBody";

const title = 'Home';
export default function Index() {

    return (
        <>
            <Title title={title} />
            <IndexBody />
        </>
    );
}