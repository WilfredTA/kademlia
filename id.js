class ID {
  constructor(id){
    if (this.validate(id)){
      this.id = id;
    } else {
      let err = new Error("ID MUST BE 160 BIT STRING")
      throw err;
    }
  }

  validate(id){
    console.log(new Buffer(id, 'hex'))
    return new Buffer(id,'hex').byteLength === 20;
  }

}

new ID('059e5ce8d0d3ee0225ffe982e38f3f5f6f748328')

exports.ID = ID;