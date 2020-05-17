import { parseDate, parseDateTime, dayOfYear, currentDayOfYear, } from 'https://deno.land/std/datetime/mod.ts';
var a = await parseDate("20-01-2019", "dd-mm-yyyy") // output : new Date(2019, 0, 20)
console.log(a);

var b = await parseDate("2019-01-20", "yyyy-mm-dd") // output : new Date(2019, 0, 20)
console.log(b);

var c = await parseDateTime("01-20-2019 16:34", "mm-dd-yyyy hh:mm") // output : new Date(2019, 0, 20, 16, 34)
console.log(c);
var d = await parseDateTime("16:34 01-20-2019", "hh:mm mm-dd-yyyy")
console.log(d);

var e = await dayOfYear(new Date("2019-03-11T03:24:00")); // output: 70
console.log(e);

var f = await currentDayOfYear();
console.log(f);
