# scheme
## userAccount:
    google account{
    "iss": "https://accounts.google.com",
    "nbf": 1671928016,
    "aud": "872960135632-2irvivn8qk2bnqn86bin0g3m4punsnfh.apps.googleusercontent.com",
    "sub": "105769226088719477219",
    "email": "prophet12505@gmail.com",
    "email_verified": true,
    "azp": "872960135632-2irvivn8qk2bnqn86bin0g3m4punsnfh.apps.googleusercontent.com",
    "name": "Hongxin Ouyang",
    "picture": "https://lh3.googleusercontent.com/a/AEdFTp6ivKXzxwYuWqp-f-nj1Ep3QYnorYnA8-FzjM7J=s96-c",
    "given_name": "Hongxin",
    "family_name": "Ouyang",
    "iat": 1671928316,
    "exp": 1671931916,
    "jti": "941322a84564136ac9fade5404f405404f781808"
    }

    real userAccount{
        "email"
        "name"
        "password"
        "picture"
        
    }



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