import React from 'react';

const IssueCard = ({customer, handleIssues}) => {

   
    return (
                <div onClick={()=> handleIssues(customer)} key={customer.ticket_id} className="card bg-white card-md shadow-md cursor-pointer rounded-xl mb-3  mr-5 hover:shadow-xl p-3 w-full gap-5">
           
            <div className='flex justify-between items-center p-1 '>
                <h2 className="card-title ml-2 text-xl font-semibold">{customer.issue_title}</h2>
            <button className={`btn m-2 flex justify-between items-center p-2 rounded-3xl ${customer.status == 'Open'? "bg-green-200 text-green-900 font-semibold" : "bg-yellow-200 text-yellow-900 font-semibold" }`}><span className= {`inline-block h-3 w-3 rounded-full bg-green-600 mr-1  ${customer.status == 'Open'? "bg-green-600" : "bg-yellow-600"}`} ></span>{customer.status} </button>
            </div>
  <div className="card-body p-4 ">
    <p className='mb-2'>{customer.issue_description}</p>
    <div className='flex flex-col lg:flex-row justify-between gap-3 mr-3'>
        <div className='flex gap-2'>
        <span className='font-semibold'>{customer.ticket_id}</span>
        <p className='text-red-500 font-semibold'>{customer.priority}</p>
        </div>
         <div className='flex gap-4 justify-end'>
            <p className=''>{customer.assigned_agent
             }</p>
                     <span className='mr-3'>{customer.
             date_created}</span>
         </div>

    </div>
    
    
    </div>
</div>
    );
};

export default IssueCard;