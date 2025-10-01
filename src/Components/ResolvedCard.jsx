import React from 'react';

const ResolvedCard = ({customer}) => {
    return (
        <div className='shadow p-5 bg-[#E0E7FF] rounded-xl mt-4'>
            <h2 className='text-xl font-semibold'>{customer.issue_title}</h2>
        </div>
    );
};

export default ResolvedCard;