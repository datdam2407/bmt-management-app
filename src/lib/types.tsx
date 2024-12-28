interface Person {
	name: string;
	attendance: number;
	prevMonth: number;
	thisMonth: number;
	prepaid: number;
	today: number;
	needToPay: number;
  }
  
export interface SheetRow {
	Name: string;
	Attendance: number;
	"Prev Month": number;
	"This Month": number;
	Prepaid: number;
	Badminton: number;
	"Need to Pay": number;
}
  
export class Player implements Person {
	name: string;
	attendance: number;
	prevMonth: number;
	thisMonth: number;
	prepaid: number;
	today: number;
	needToPay: number;
  
	constructor(obj: SheetRow) {
	  this.name = obj.Name;
	  this.attendance = obj.Attendance;
	  this.prevMonth = Math.round(obj["Prev Month"] * 10) / 10;
	  this.thisMonth = Math.round(obj["This Month"] * 10) / 10;
	  this.prepaid = Math.round(obj.Prepaid * 10) / 10;
	  this.today = Math.round(obj.Badminton * 10) / 10;
	  this.needToPay = Math.round(obj["Need to Pay"] * 10) / 10;
	}
}
  