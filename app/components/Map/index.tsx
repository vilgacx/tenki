"use client"

import dynamic from "next/dynamic";
import Loading from "../Loading";

const Map = dynamic(() => import('./Map'), { loading: () => <Loading />, ssr: false });

export default Map;