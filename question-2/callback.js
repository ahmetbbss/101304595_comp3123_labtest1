
const resolvedPromise = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = {'message': 'delayed success'}
        console.log(success);
      }, 500);
  });
  };
  
  const rejectedPromise = async () => {
     return new Promise((resolve, reject) => {
      setTimeout(() => {
        try{
          throw new Error('rejected error!');
        } catch(error){
       console.error(error)
        }
        
      }, 500);
    });
  };
  
  resolvedPromise()
  rejectedPromise()
    