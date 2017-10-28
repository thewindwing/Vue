const http=require('http');
const urlm=require('url');
const server=http.createServer();
server.on('request',(req,res)=>{
    // const url=req.url;
    const {pathname:url,query}=urlm.parse(req.url,true);

    if(url=='/getScript'){
        var data = {
            name: 'xjj',
            age: 18,
            gender: '女孩子'
        };
        var str=`${query.callback}(${JSON.stringify(data)})`
        // console.log(str)
        res.end(str);
    }
});
server.listen(3000,(req,res)=>{
    console.log('http://127.0.0.1:3000');
});