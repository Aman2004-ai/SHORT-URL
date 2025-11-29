

const User = require('../models/user');
const { setUser } = require('../service/auth');


async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    try {
        const user = await User.create({
            name,
            email,
            password,
        });
        const token = setUser(user);
        res.cookie("uid", token);
        return res.redirect("/");
    } catch (err) {
        // Duplicate key (email) error from MongoDB
        if (err && err.code === 11000) {
            return res.render("signup", { error: "Email already registered" });
        }
        console.error(err);
        return res.render("signup", { error: "Something went wrong" });
    }
}
async function handleUserLogin(req, res) {
const { email, password } = req.body;
const user = await User.findOne({ email, password });
if(!user) return res.render("login", {
    error: "Invalid Username or password",
});
const token = setUser(user);
//res.cookie("uid", token,)
 {
return res.json({ token });
};


return res.redirect("/");
}


module.exports = {
    handleUserSignup,
    handleUserLogin,
}