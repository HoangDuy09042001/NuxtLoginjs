export default {
    async handleRequest(context, information) {
      //Email: Sincere@april.biz
      //Password: Bret
      try {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/users?email=${information.email}&username=${information.password}`
        );
        const result = await data.json();
        if (data.status == 200 && result!=null) {
          const success = "success";
          localStorage.setItem("user-info", JSON.stringify(result));
          context.commit("changeStatus", success);
          context.commit("changeInfor", result[0]);
          alert("You have successfully logged in");
        }
      } catch (error) {
        const fail = "fail";
        context.commit("changeStatus", fail);
        console.log(error);
      }
    },
  }