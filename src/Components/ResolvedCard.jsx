import React from 'react';

const ResolvedCard = ({customer}) => {
    return (
        <div className='shadow p-5 border rounded-xl'>
            <h2 className='text-xl font-bold'>{customer.issue_title}</h2>
        </div>
    );
};

export default ResolvedCard;