
dis = document.getElementById("h1");

let phoneObject = {
    phone1: { make: "Samsung", model: "Galaxy S10", releaseYear: 2019 },
    phone2: { make: "Motorola", model: "M24", releaseYear: 2010 },
    phone3: { make: "Huawei", model: "P40", releaseYear: 2020 },

};

let callObj = {

    calling1: "416-222-22-22",
    calling2: "416-222-22-23",
    calling3: "416-222-22-24"

};


function Phone({ make, model, releaseYear }) {
    this.make = make,
        this.model = model,
        this.releaseYear = releaseYear;

}

Phone.prototype.makeCall = function (phoneNumber) {

    console.log("calling " + phoneNumber);
};

Phone.prototype.returnInfo = function () {
    dis.innerHTML +=
        " Make: " + this.make +
        ", Model: " + this.model +
        ", Year: " + this.releaseYear + "<br>";
};


for (let value of Object.values(phoneObject)) {
    new Phone({ ...value }).returnInfo();

}

for (let value1 of Object.values(callObj)) {
    new Phone({}).makeCall(value1);
}
