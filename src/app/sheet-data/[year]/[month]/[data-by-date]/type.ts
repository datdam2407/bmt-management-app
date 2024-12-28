export interface Person {
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
	  this.prevMonth = Player.roundToOneDecimal(obj["Prev Month"]);
	  this.thisMonth = Player.roundToOneDecimal(obj["This Month"]);
	  this.prepaid = Player.roundToOneDecimal(obj.Prepaid);
	  this.today = Player.roundToOneDecimal(obj.Badminton);
	  this.needToPay = Player.roundToOneDecimal(obj["Need to Pay"]);
	}
  
	private static roundToOneDecimal(value: number): number {
	  return Math.round(value * 10) / 10;
	}
  }
  