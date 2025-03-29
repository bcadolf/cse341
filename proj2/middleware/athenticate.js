
const isAuthenticated = (req, res, next) => {
    if (req.session.user === undefined) {
        return res.status(401).json('NO ACCESS NO TOUCHY FOR YOU!');
    }
    next();
}

module.exports = {
    isAuthenticated
}
