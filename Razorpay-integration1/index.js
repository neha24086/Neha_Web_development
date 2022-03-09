let express = require('express');
let Razorpay = require('razorpay');



const app = express();
let order_id_variable

const razorpay = new Razorpay({
    key_id:"rzp_test_wwDeBMKrZ0Blym",
    key_secret:"IwL0WZEJ1ApD2Ddlg58kA8Fr"
})

app.set ('views', 'views');
app.set('view engine','ejs');
app .use(express.urlencoded ({extended:false}))


app.get('/',(req,res) => {
    res.render ("razorpay.ejs")

})
app.post('/order',(req,res) =>{
    var options = {
        amount:5000,
        currency:"INR",
        
    };
    razorpay.orders.create(options, function(err,order){
         
        console.log(order)
        res.json(order)
    })
})

app.post('/is-order-complete', (req,res) => {

razorpay.payments.fetch(req.body.razorpay_payment_id).then((paymentDocument)=>{
    if(paymentDocument.status == 'captured'){
        res.send('payment successful')
    } else{
        res.redirect('/')
    }
})
})

app.listen(5000);

