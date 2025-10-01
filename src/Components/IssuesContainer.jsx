import React, { use, useState } from 'react';
import Banner from './Banner';
import { toast, ToastContainer } from 'react-toastify';
import IssueCard from './Card/IssueCard';
import TaskCard from './TaskCard';
import ResolvedCard from './ResolvedCard';


  


 
const IssuesContainer = ({fetchPromise}) => {
    const data = use(fetchPromise);

    const [issues, setIssues] = useState(data);

    const [issue, setIssue] = useState([]);
    const [resolved, setResolved] = useState([]);

    const handleIssues = (customer) => {
        
        const isExist = issue.find(iss => iss.ticket_id === customer.ticket_id);
        if(isExist){
            toast('In-Progress!')
            return;
        }

         const newIssue = [...issue, customer];
            setIssue(newIssue);
    }
           
       const handleResolved = (customer) => {
        const newResolved = [...resolved, customer];
        setResolved(newResolved);

        const remainingIssue = issue.filter(iss => iss.ticket_id !== customer.ticket_id);
        setIssue(remainingIssue);
        toast('Task Completed!')

        const remainingIssues = issues.filter(iss => iss.ticket_id !== customer.ticket_id);
        setIssues(remainingIssues);
       }
           
   
    
    
    return (
        <div className='w-11/12 mx-auto'>
            <Banner issueTotal = {issue.length} 
              resolvedTotal= {resolved.length}
            
            ></Banner>


            <section className='flex flex-col lg:flex-row gap-2'>
             <ToastContainer></ToastContainer>

                <div className=''>
                    <h3 className='text-xl font-semibold'>Customer Tickets</h3>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto mt-5 md:grid-cols-1 '>
            
            <div className='grid grid-cols-1 md:grid-cols-2 col-span-7 gap-2'> 
                
            {
            issues.map((customer) => 
                <IssueCard handleIssues= {handleIssues} key={customer.ticket_id} customer={customer}>

                </IssueCard>
                
                )
           } 
              </div>
              </div>
                </div>

              {/* side bar */}

              <div className='mb-5 col-span-4 ml-5'>
             
            <h2 className='text-2xl font-semibold'>Task Status</h2>
            
               {
                 ( issue.length === 0 && (
                   <p className='m-2'>Select a ticket to add to Task Status</p>
                 )
                        
                    )}
               
            
                {
                issue.map(customer => 
                <TaskCard handleResolved={handleResolved} key={customer.ticket_id} customer= {customer}>

                </TaskCard>
            )
            
                }
                
           
                
       
        
        
            <h2 className='text-2xl font-semibold mt-5 ml-1'>Resolved Status</h2>
            

             {
                 ( resolved.length === 0 && (
                   <p className='ml-2'>No resolved tasks yet.</p>
                 )
                        
                    )}
            
            {
                resolved.map(customer => (
                    <ResolvedCard key={customer.ticket_id} customer={customer}>

                    </ResolvedCard>
                ))
            }
            
        
              </div>
           </section>
           
        </div>
    );
};

export default IssuesContainer;