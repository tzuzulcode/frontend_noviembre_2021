import React from 'react'

export default function Container({children,background}) {
    return (
        <div className={`container-${background}`}>
            <div className="container">
            {children}
            </div>
        </div>
    )
}
