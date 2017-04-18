function Chef(newId, newName) {
    this.id = newId;
    this.name = newName;
    this.orderGroups = [];
    this.servers = [];
    this.menu = [];

    //  Start up function
    //  Passing in a server array
    this.init = function () {
        var newServer = new Server(1, 'Sean');
        this.servers.push(newServer);

        //  Passing the chef to the server
        newServer.chef = this;
        newServer.init(this);
    };

    //  This one you can access from the inside and the outside.
    this.complain = function () {
        console.log("I, "+this.name+", am mad as hell, and I'm not going to cook this shit anymore");
    };

    //  This one you can only access from the inside cause of scoope and this.
    function reallyComplain() {

    }
}

function Server(newId, newName){
    this.id = newId;
    this.name = newName;
    this.tables = [];
    this.order_queue = [];
    this.chef = null;
    this.init = function(parentChef){
        this.chef = parentChef;
        var newTable = new Table(1,'southwest corner');
        this.tables.push(newTable);
        newTable.init(this);
    }
}

function Table(newId, newLocation){
    this.id = newId;
    this.customers = [];
    this.location = newLocation;
    this.server = null;
    this.init = function(parentServer){
        this.server = parentServer;
        var newCustomer = new Customer('Erik',1);
        this.customers.push(newCustomer);
        newCustomer.init(this);
    }
}

function Customer(newName, seatNumber){
    this.name = newName;
    this.people = [];
    this.seat = seatNumber;
    this.order = [];
    this.table = null;
    this.init = function(parentTable){
        this.table = parentTable;
        console.log('DONE');
    }
}

var headChef = new Chef(1,'Nancy');
headChef.init();
//console.log(headChef,sousChef,shitChef);