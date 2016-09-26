var any = {
    number: function(min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER){
        return Math.floor((Math.random() * (max - min + 1))) + min;
    }
}

module.exports = any;