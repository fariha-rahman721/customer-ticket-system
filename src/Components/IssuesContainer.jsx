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
               

            <section className='w-11/12  mx-auto flex flex-col lg:flex-row gap-5 mt-10 mb-10'>
             <ToastContainer></ToastContainer>

                <div className=''>
                    <h3 className='text-2xl font-semibold'>Customer Tickets</h3>
           
            
            <div className='col-span-7 grid grid-cols-1 lg:grid-cols-2 gap-3 mt-2'> 
                
            {
            issues.map((customer) => 
                <IssueCard handleIssues= {handleIssues} key={customer.ticket_id} customer={customer}>

                </IssueCard>
                
                )
           } 
              </div>
              </div>
                

              {/* side bar */}

              <div className='mx-auto mb-5 col-span-4'>
             
            <h2 className='text-2xl font-semibold'>Task Status</h2>
                
            
               {
                 ( issue.length === 0 && (
                   <p className=' m-2'>Select a ticket to add to Task Status</p>
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