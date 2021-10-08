import React from 'react'

export const DashboardScreen = () => {
    return (
        <div>
            <button onClick={() => sessionStorage.removeItem('user') }>
                Borrar
            </button>
        </div>
    )
}
