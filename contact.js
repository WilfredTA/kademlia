class Contact{
  constructor(host, port){
    this.host = host;
    this.port = port;
    this.lastSeen = this.updateLastSeen();
  }

  updateLastSeen(){
    this.lastSeen = Date.now();
  }
}

exports.Contact = Contact