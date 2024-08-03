export class Patient {
  constructor(public id: number,
              public firstName: string,
              public lastName: string,
              public dateOfBirth: Date,
              public gender: string,
              public mail: string,
              public phone: string,) {}
}
