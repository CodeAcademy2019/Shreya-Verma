var foot = {
    kick: () => {
        this.yelp = "Ouch!";
        setImmediate(()=>console.log(this.yelp));
        return (this.yelp);
    }
};
module.exports=foot;