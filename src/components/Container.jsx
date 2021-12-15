import React from 'react'

export default function Container({children,background}) {
    return (
        <div className={`container-${background} shadow-lg`}>
            <div className="container">
            {children}
            </div>
        </div>
    )
}
