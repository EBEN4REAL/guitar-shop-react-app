import React from 'react';

const Cardblock = (props) => {
    // const renderCards = (cardList) => (
    //     props.list ? 
    //         props.list.map((Cardblock) => {
    //             return (
    //                 <div>
    //                     'CARD'
    //                 </div>
    //             ) 
    //         })

    //     : null
    // )
    return (
        <div className="card_block">
            <div className="container">
                {
                    props.title ? 
                        <div className="title">
                            {props.title}
                        </div>

                    : null
                }
                <div style={{ 
                    display: 'flex',
                    flexWrap: 'wrap'
                 }}>
                    {/* {renderCards(props.list)} */}
                 </div>
            </div>
        </div>
    )
}

export default Cardblock