const user = {
    username: 'sourav',
    loginCount: 4,
    signIn: true
}
console.log(user.username);


function users(username, loginCount, signIn) {

    this.username = username;
    this.loginCount = loginCount;
    this.signIn = signIn
    // console.log(this);
    return this;



}
const user1 = new users('kumar', 1, true)//function constructor
const user2 = new users('biswal', 5, true)
console.log(user1.username);
console.log(user2.username);


// function studentDetails(name,roll,grade){


//     this.name=name
//     this.roll=roll
//     this.grade=grade
//     this.show=function (){
//         console.log(
//            ` Name:${this.name}
//             Roll: ${ this.roll} 
//             Grade:${ this.grade}`)

//     }
// }
// const student1= new studentDetails('sourav',10,'B')
// const student2= new studentDetails('kumar',20,'A')
// student1.show()
// student2.show()

function products(name, price, discount) {
    this.name = name
    this.price = price
    this.discount = discount
    this.finalprice = function () {
        let afterdiscount = this.price * (this.discount / 100)
        let finalprice = this.price - afterdiscount
        console.log(`The final price of ${this.name} is ${finalprice}`);
    }
}
const product1 = new products('laptop', 50000, 10)
const product2 = new products('mobile', 20000, 5)
product1.finalprice();
product2.finalprice();


function accountDetails(name, balance) {
    this.name = name;
    this.balance = balance;

    this.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`✅ ₹${amount} deposited`);
        } else {
            console.log("❌ Invalid deposit amount");
        }
        this.showBalance();
    }

    this.withdrawal = function (amount) {
        if (amount > this.balance) {
            console.log("❌ Not enough balance");
        } else if (amount > 0) {
            this.balance -= amount;
            console.log(`✅ ₹${amount} withdrawn`);
        } else {
            console.log("❌ Invalid withdrawal amount");
        }
        this.showBalance();
    }

    this.showBalance = function () {
        console.log(`💰 Available Balance for ${this.name}: ₹${this.balance}`);
    }
    this.showBalance()
}
const acc1 = new accountDetails('sourav', 10000)
const acc2 = new accountDetails('kumar', 5000)
acc1.deposit(1500)
acc1.withdrawal(1500)

function StudentGrade(name, mark) {
    this.name = name;
    this.mark = mark;

    this.showGrade = function () {
        if (this.mark >= 0 && this.mark <= 100) {
            let grade = '';

            if (this.mark >= 90) {
                grade = 'A';
            } else if (this.mark >= 75) {
                grade = 'B';
            } else if (this.mark >= 60) {
                grade = 'C';
            } else {
                grade = 'F';
            }

            console.log(` Student: ${this.name}`);
            console.log(` Marks: ${this.mark}`);
            console.log(` Grade: ${grade}`);
        } else {
            console.log(`❌ ${this.mark} is not a valid mark for ${this.name}`);
        }
    };
}
const std1 = new StudentGrade('Sourav', 75);
const std2 = new StudentGrade('Biswal', 91);
const std3 = new StudentGrade('Ramesh', 56);
const std4 = new StudentGrade('Fake', 150);

std1.showGrade();
std2.showGrade();
std3.showGrade();
std4.showGrade();



function bookMovieticket(name, moviename) {
    this.name = name
    this.moviename = moviename
    this.price=200
    this.bookings = function (qty) {
        if (qty<1||isNaN(qty)) {
            console.log('enter valid quantity');
            
        }
        else{
            let totalPrice = qty * this.price;
console.log(`
name :${this.name}
MovieName:${this.moviename}
QTY:${qty}
totalPrice:${totalPrice}`);
        }
    }
}
const cost1 = new bookMovieticket('sourav', 'Kantara')
const cost2 = new bookMovieticket('kumar', 'Avengers')
cost1.bookings()
cost1.bookings(10)

