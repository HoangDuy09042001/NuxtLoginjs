export const state =() => ({
    userInfor: {
       

    },
    status: ''
})

export const mutations = {
    changeStatus(state,newState){
        state.status = newState;
        console.log(state.status);
      },
      changeInfor(state,newInfor){
        if(state.status==='success'){
           state.userInfor = newInfor;
           console.log(state.userInfor);
        }
      }
}

export const actions = {
        async handleRequest(context,information){
        //Email: Sincere@april.biz
        //Password: Bret
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/users?email=${information.email}&username=${information.password}`);
            const result = await data.json();
            if(data.status == 200 ){
                const success = 'success';
                localStorage.setItem("user-info", JSON.stringify(result));
                context.commit('changeStatus', success);
                context.commit('changeInfor', result[0]);
                alert('You have successfully logged in');
                console.log(result[0]);
                console.log(data);
            }
            
        } catch (error) {
          const fail = 'fail';
          context.commit('changeStatus', fail); 
          console.log(error);   
        }
    }
}