import React from 'react'
import { SubMenuItem } from './SubMenuItem'


export const MenuItem = ({ description,hasSubmenu,submenus,idMenu,Route }) => {
    return (
        <div>
        { 
            hasSubmenu
            ? 
            (
                <li className='nav-item dropdown'>
                    <div 
                        id={`idMenu${idMenu}`}
                        className='nav-link dropdown-toggle' 
                        href='#'
                        role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false" >
                        { description }
                    </div>
                    <SubMenuItem 
                        idMenu={`idMenu${idMenu}`}
                        submenus={submenus}
                        Route={Route}
                    />
                </li>
            )
            : 
            (
                <li className='nav-item'>
                    <div className='nav-link' href='#' >
                        { description }
                    </div>
                </li>
            )
        }
        </div>
    )
}
