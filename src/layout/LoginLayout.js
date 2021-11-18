import React from 'react'

function LoginLayout(props) {
    return (
        <div>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default LoginLayout
