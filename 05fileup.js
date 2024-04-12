const http = require("http")

http.createServer((req,res)=>{
res.write(200, {'Content-Type': 'text/html'});
res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
res.write('<input type="file" name="filetoupload"><br>');
res.write('<input type="submit">');
res.write('</form>');
return res.end();


}).listen(2609,()=>console.log("server started"))   