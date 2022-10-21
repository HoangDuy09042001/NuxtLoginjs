export const state = () => ({
    email: '',
    password: '',
    status: ''
})

export const mutations = () => ({
    changeStatus(state,newState){
        state.status = newState;
      },
      changeInfor(state,newInfor){
        if(state.status==='success'){
           state.email = newInfor.email;
           state.password = newInfor.password;
        }
      }
})

export const actions = () => ({

       async handleRequest(context,information){
        //Email: Sincere@april.biz
        //Password: Bret
        try {
            let result = await axios.get(
                `https://jsonplaceholder.typicode.com/users?email=${information.email}&username=${information.password}`
            )
            if(result.status == 200 && result.data.length >0){
                const success = 'success';
                const newInfor = {
                    email: result.data[0].email,
                    password: result.data[0].username
                }
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                context.commit('changeStatus', success);
                context.commit('changeInfor', newInfor);
                alert('You have successfully logged in');
                console.log(result.data[0]);
                console.log(newInfor)
                console.log(this);
            }
            
        } catch (error) {
          const fail = 'fail';
          context.commit('changeStatus', fail); 
          console.log(error);   
        }
    }
})