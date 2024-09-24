exports.middlewareGlobal=(req,res,next) =>{
    if (req.body.cliente){
        console.log();
        req.body.cliente = req.body.cliente.replace('Santos', 'Nao use Santos' );
        console.log(`vi que voce postou ${req.body.cliente}`);
        console.log();
        
    }
    
    next();
}
exports.outroMiddleware=(req,res,next) =>{
    console.log('sou seu outro middleware');
    
    next();
}