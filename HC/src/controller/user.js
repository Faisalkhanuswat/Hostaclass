module.exports= {
    login: (req, res)=>{
        res.render('Login',{
            title: 'Login'
        });
    },
    signup: (req, res)=>{
        res.render('Signup',{
            title: 'Signup'
        });
    },
    blog: (req, res)=>{
        res.render('blog',{
            title: 'Blog'
        });
    }
}