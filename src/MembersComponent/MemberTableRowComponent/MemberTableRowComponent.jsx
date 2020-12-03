import React from "react";

const MemberTableRow = (props) => {
    return (
        <div className='mm__table__row'>
            <p className="mm__table__col name">
                <img src={props.userIcon}/>
                <span className="text__block">
                    {props.name}
                    <span className="icon-settings"></span>
                </span>
            </p>
            <p className="mm__table__col email">
                {props.email}
            </p>
            <p className={"mm__table__col status" + ' ' + props.status}>
                <span className='mm__status'>
                    {props.status}
                </span>
            </p>
            <p className="mm__table__col role">
                {props.role}
            </p>
            <p className="mm__table__col approve">
                {props.approve}
            </p>
        </div>
    )
}

export default MemberTableRow;