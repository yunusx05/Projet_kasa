import React from "react";

const Appart = ({data}) => {
    return(
        <div className="card">
            <a href={'/appart/' + data.id}>
                <img src={data.cover} alt={'photo appart'+ data.id} />
            </a>
            <h3>{data.title}</h3>
        </div>
    )
}

export default Appart