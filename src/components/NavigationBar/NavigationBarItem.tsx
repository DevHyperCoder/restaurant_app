import { NavLink } from 'react-router-dom'
import React from 'react'

interface INavigationItem {
    name: string,
    link: string,
    exact?: boolean,
}

export const NavigationItem: React.FunctionComponent<INavigationItem> = (props) => {
    const {name, link, exact = false} = props
    return (
        <li className="pt-4 border-b-2 border-opacity-0 hover:border-opacity-100 border-primaryorange hover:cursor-pointer">
            <NavLink
                exact={exact}
                to={link}
            >
                <div>{name}</div>
            </NavLink>
        </li>
    )

}