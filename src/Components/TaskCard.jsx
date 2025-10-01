import React from 'react';

     const TaskCard = ({customer, handleResolved}) => {
         return (
        <div>
            <h2 className='text-xl bg-white p-3 rounded-xl space-y-2 gap-2 font-semibold'>{customer.issue_title}</h2>
                <button onClick={()=> handleResolved(customer)} className='bg-green-600 hover:bg-green-500 text-white text-xl font-semibold p-2  rounded-xl w-full'>Complete</button>
        </div>
    );
    };

    export default TaskCard;