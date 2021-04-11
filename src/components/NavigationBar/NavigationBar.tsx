import React from "react"
import { NavigationItem } from "./NavigationBarItem"

export const NavigationBar: React.FunctionComponent = () => {

    return (
        <div>
            <ul className={'h-16 text-primaryblue md:flex justify-center gap-8 md:border-b pt-4 text-sm'}>
                <span className={"text-primaryorange pr-32 text-2xl justify-self-start font-sans"}>Kuks Fresh</span>
                <NavigationItem link={'/'} name={'Find'}/>
                <NavigationItem link={'/'} name={'About Us'}/>
                <NavigationItem link={'/'} name={'How it Works'}/>
                <NavigationItem link={'/'} name={'Plans'}/>
                <NavigationItem link={'/'} name={'Contact Us'}/>
            </ul>
        </div>
    )
}
