"use client"
import { Hero } from "./hero";
// import { useMediaQuery } from 'usehooks-ts'
import { useMediaQuery } from "@mantine/hooks";
import Mobile from "./(mobile)/mobile";

export default function Join(){
    const matches = useMediaQuery("(min-width: 768px)");
    // const matches = useMediaQuery('(min-width: 56.25em)')
    return <main className="">{matches ? <Hero /> : <Mobile/>}</main>
}