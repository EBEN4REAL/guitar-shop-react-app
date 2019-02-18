import React from 'react';

const Cardblock = (props) => {
    return (
        <div className="card_block">
            <div className="container">
                {
                    props.title ? 
                        <div className="title">
                            props.title
                        </div>

                    : null
                }
            </div>
        </div>
    )
}

export default Cardblock