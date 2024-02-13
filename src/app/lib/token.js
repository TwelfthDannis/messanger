import jwt from 'jsonwebtoken';

const verifyToken = (req,res,next)=>{
    const token=req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        req.user = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET);
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};
