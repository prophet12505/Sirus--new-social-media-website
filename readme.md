# dependencies
## client:
        npx creat-react-app ./
        npm i axios moment react-file-base64 redux-thunk
        //npm i react-redux redux
        npm i @material-ui/core
        npm i jwt-decode react-google-login
        npm install react-router-dom --save
        
## server:
        npm init -y
        npm install mongoose nodemon express cors
        npm i .env //for the environment configuration  
        npm i bcryptjs jsonwebtoken



## Study further：
        material-ui/core
        bodyParser middleware
        axios
        redux
        react-file-base64

It's OK

    




# design your project:
1. wireframe of your website(envision)
2. what kind of Component needed, Component Tree?
- Form
- Posts
    - Post
    - Post
    - Post
3. What Kind of Model? Each model's Schema of the database?
            PostMessage:
            const postSchema=mongoose.Schema({
                title:String,
                message:String,
                creater:String,
                tags:[String],
                selectedFile:String,
                likeCount:{
                    type:Number,
                    default:0
                },
                createdAt:{
                    type:Date,
                    default:new Date()
                }
            });

4. router design
- get: getPosts
- post: createPost

5. action design(if use redux)
    what store?
    posts=[]
    what kind of action tyes: FETCH_ALL  CREATE

6. complicated middleware call:
        const store=createStore(reducers,compose(applyMiddleware(thunk)));
            //this is the way of using redux-thunk