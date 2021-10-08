import React from 'react'
import { Link } from 'react-router-dom'


export const SubMenuItem = ({idMenu,submenus,Route}) => {
    return (
        <div className="dropdown-menu" aria-labelledby={idMenu} >
            { submenus.map((value,index) =>{
                return (
                        <Link
                             to={`/${Route}/${value.route}`}
                             key={`submenu${value.idSubmodule}`}>
                            <div 
                                className="dropdown-item"
                                href="#"
                                > { value.name } 
                            </div>
                            { value.separator && <div className="dropdown-divider"></div> }
                        </Link>
                    )
                })
            }
            
            {/* <div className="dropdown-item" href="#">Another action 2</div>
            <div className="dropdown-divider"></div> */}
        </div>
    )
}
