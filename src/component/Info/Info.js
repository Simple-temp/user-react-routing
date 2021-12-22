import React from 'react';

const Info = (props) => {
    const isit = props.isit;
    let conditionOne;
    if(isit)
    {
        conditionOne = <p>i know you</p>;
    }
    else 
    {
        conditionOne = <p>i dont know you</p>;
    }
    return (
        <div>
            <h3>condition-1</h3>
            {
                conditionOne
            }

            <h3>condition-2</h3>
            {
                isit ? <p>i like you</p> : <p>i dont like you</p>
            }

            <h3>condition-3</h3>
            {
                isit && <p>i love you</p>
            }

        </div>
    );
};

export default Info;