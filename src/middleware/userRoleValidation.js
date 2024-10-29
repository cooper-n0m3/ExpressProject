// roleValidation.js
export const roleValidation = (requiredRoles) => {
    return (req, res, next) => {
        if (!req.session || !req.session.user) {
            req.flash('title','Error')
            req.flash('description',`Authenticated expired! Login again`)
            return res.redirect('/auth/login');
        }
        const userRole = req.session.user.role;
        if (requiredRoles.includes(userRole)) {
            req.flash('title','Success')
            req.flash('description',`You logged in successfully.`)
            req.flash('username',req.session.user.username)
            return next();
        }
        req.flash('title','Error')
        req.flash('description',`Forbidden: Insufficient permissions`)
        return res.redirect('/auth/login')
    };
};
