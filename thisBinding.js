const hitesh = {
  firstName: "Hitesh",
  lastName: "Choudhary",
  role: "Admin",
  courseCount: 3,
  getInfo: function () {
    console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
  },
};

const dj = {
  firstName: "Rock",
  lastName: "DJ",
  role: "Sub-Admin",
  courseCount: 4,
};

// hitesh.getInfo();
// dj.getInfo();

// var djInfo = hitesh.getInfo.bind(dj);//just returns the reference of the method we need to call this reference with or without storing in a variable i.e.,getInfo
// djInfo();

hitesh.getInfo.call(dj);//directly calls the binded method no need to call extra i.e.,getInfo();
