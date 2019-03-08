export class User {
  id: number;
  name: string;
  role: string;
  dob: Date;
  constructor(id, name, role, dob) {
    this.id = id;
    this.name=name;
    this.role=role;
    this.dob=dob;
  }

}
