import React from 'react'

export default function MessageBox(props) {
    return <div className="loading valign-wrapper">
        <div className={"collection hmmm alert alert-"+props.variant||'info'}>
        <div className={"collection-item"}>
        {props.children}
        </div>
    </div>
    </div>
}
