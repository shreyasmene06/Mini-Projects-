function displayMember(id: number, name: string, email?: string): void {
console.log(`ID: ${id}, Name: ${name}`);
if (email) console.log(`Email: ${email}`);
}
function calculateFines(...fines: number[]): number {
let total = 0;
for (let fine of fines) total += fine;
return total;

}
function membershipFee(price: number, discountRate: number = 0.1): number {
return price - price * discountRate;
}
function greetVisitor(visitor: string, formatter: (name: string) => void): void {
formatter(visitor);
}
const vipGreet = (name: string) => console.log(`Welcome VIP ${name}!`);
// 6. Function Overloads for Report Generation
function generateReport(data: object[]): string;
function generateReport(data: object[], format: "json"): string;
function generateReport(data: any[], format?: string): string {
if (format === "json") {
return JSON.stringify(data, null, 2);
}
return data.map(item => item.toString()).join("\n");
}
// 7. Function Type & Alias
type VisitorFormatter = (name: string) => void;
let consoleGreet: VisitorFormatter = (n) => console.log(`Hello, ${n}!`);

//calling display member got 2 members
displayMember(1, "John Doe");
displayMember(2, "Jane Smith", "jane@example.com");
calculateFines(5,10,2.5);
membershipFee(100);
membershipFee(100,0.2);
greetVisitor("Alice", vipGreet);
greetVisitor("Alice",consoleGreet);
greetVisitor("Bob",vipGreet);
greetVisitor("Bob", consoleGreet);
generateReport([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }],"json");
generateReport([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }])
