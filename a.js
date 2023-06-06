let a = parseInt(prompt("Input a"))
let b = parseInt(prompt("Input b"))
let c = parseInt(prompt("Input c"))
let D = b*b - 4*a*c

if (a != 0 && b != 0){
	if (D > 0){
		D = Math.sqrt(D)
		let x1 = (-b - D) / (2*a)
		let x2 = (-b + D) / (2*a)
		let s = "x1 = " + String(x1) + "\n"
		s += 	"x2 = " + String(x2)
		alert(s)
	}
	else if (D == 0){
		D = Math.sqrt(D)
		let x = -b / (2*a)
		let s = "x = " + String(x)
		alert(s)
	}
	else if (D < 0){
		let re = -b / 2 * a
		let im = Math.sqrt(-1 * D)
		let s = "x1 = " + String(re) + " + " + String(im) + "i" + "\n"
		s += 	"x2 = " + String(re) + " - " + String(im) + "i"
		alert(s)
	}
}
else if (a != 0 && b == 0 && c != 0){
	if (c < 0){
		let x = -1 * c / a
		x = Math.sqrt(x)
		let s = "x1 = " + String(x) + "\n"
		x *= -1
		s +=	"x2 = " + String(x)
		alert(s)
	}
	else if (c > 0){
		let x = c / a
		x = Math.sqrt(x)
		let s = "x1 = " + String(x) + "i" + "\n"
		x *= -1
		s +=	"x2 = " + String(x) + "i"
		alert(s)
	}
}
else if (a != 0 && b == 0 && c == 0){
	alert("x = 0")
}
else{
	alert("No solution")
}