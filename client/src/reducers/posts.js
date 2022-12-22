import { LIKE,DELETE,UPDATE,FETCH_ALL,CREATE } from "../constants/actionType";
export default (posts=[],action)=>{
    console.log("Reducer: ", posts, action);
    switch(action.type){
        case FETCH_ALL:
            {
            console.log("FETCH_ALL");
            return action.payload;
            }
        case CREATE:
            {
                console.log("CREATED") ;
            return [...posts,action.payload];
            }
        case UPDATE:
        case LIKE:
            //stack two cases together
            {
                console.log("UPDATE/LIKE");
                return posts.map((post)=>(post._id===action.payload._id)?action.payload:post);//to be reviewed
            }
        case DELETE:
            {
                console.log("DELETE");
                return posts.filter((post)=>post._id!==action.payload);
                //action.payload itself is id, shouldn't use action.payload.id; that is absolutely wrong
            }
        default:
            return posts;
            //default must return posts, otherwise there will be some issues

    }
}
