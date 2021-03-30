import React, { useState, useEffect, useMemo, useRef, memo, FC } from "react";
import { useRouter } from "next/router";
import axios, { AxiosResponse } from "axios";

let DinamicRout: FC = () => {
    const router = useRouter();
    const [data, setdata] = useState<string>("");
    const [trueOrFalse, settrueOrFalse] = useState<boolean>(true);
    // const getData = async (): Promise<any> => {
    //     while (router.query.id || trueOrFalse) {
    //         console.log('ok')
    //         const res = await axios.post("http://192.168.1.22:8888/getdata", {
    //             token: router.query.id,
    //         });
    //         setdata(res.data);
    //         settrueOrFalse(false)
    //     }    
    // };
    // useEffect((): void => {
    //     getData();
    // }, []);
    return (
        <>
            <section className="">{router.query.id}</section>
        </>
    );
};

export default DinamicRout = memo(DinamicRout);
