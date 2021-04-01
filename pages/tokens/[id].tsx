import React, { memo, FC } from "react";
import { useRouter } from "next/router";

let DinamicRout: FC = () => {
    const router = useRouter();
    return (
        <>
            <section className="">{router.query.id}</section>
        </>
    );
};

export default DinamicRout = memo(DinamicRout);
